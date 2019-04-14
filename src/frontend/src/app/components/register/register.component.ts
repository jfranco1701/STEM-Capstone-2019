import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition,
  MatAutocompleteTrigger } from '@angular/material';
import { RegistertermsComponent } from './registerterms/registerterms.component';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Observable, Subscription } from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { STATES, State } from '../../models/states';
import { MatRadioButton, MatRadioChange, MatRadioGroup} from '@angular/material/radio';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit, OnDestroy {
  @ViewChild(MatAutocompleteTrigger) trigger: MatAutocompleteTrigger;

  registerForm: FormGroup;
  public errors: any = [];
  public states: State[] = STATES;
  public filteredStates: Observable<State[]>;
  user: User;
  topPosition: MatSnackBarVerticalPosition = 'top';
  centerPosition: MatSnackBarHorizontalPosition = 'center';
  error = '';
  regType: Observable<string>;
  regTypeSubscription: Subscription;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar
  ) {}

  phonePattern = '^[0-9]{3}-[0-9]{3}-[0-9]{4}?$';
  zipPattern = '^[0-9]{5}(?:-[0-9]{4})?$';
  passwordPattern = '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,20}';

  ngOnInit() {
    this.registerForm = this.fb.group({
      regType: ['p'],
      userGroup: this.fb.group({
        organizationName: ['', [Validators.required, Validators.maxLength(50)]],
        firstName: ['', [Validators.required, Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.maxLength(50)]],
        dob: [''],
        phone: ['', [Validators.pattern(this.phonePattern)]],
      }),
      addressGroup: this.fb.group({
        address: [''],
        city: [''],
        state: ['', [Validators.maxLength(2)]],
        zip: ['', [Validators.pattern(this.zipPattern)]],
      }),
      loginGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
          password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
          confirmPassword: [''],
        },
        {
          validator: this.checkPasswords('password', 'confirmPassword'),
        }
      )
    });

    this.disableOrganization();

    this.filteredStates = this.registerForm.get('addressGroup').get('state').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
    );

    this.regType = this.registerForm.get('regType').valueChanges;

    this.regTypeSubscription = this.regType.subscribe(
      value => {
        if (value === 'p') {
          this.disableOrganization();
        } else {
          this.registerForm.get('userGroup').get('organizationName').enable();
        }
      }
    );
  }

  ngOnDestroy() {
    this.regTypeSubscription.unsubscribe();
  }

  disableOrganization() {
    this.registerForm.get('userGroup').get('organizationName').setValue('');
    this.registerForm.get('userGroup').get('organizationName').markAsPristine();
    this.registerForm.get('userGroup').get('organizationName').markAsUntouched();
    this.registerForm.get('userGroup').get('organizationName').updateValueAndValidity();
    this.registerForm.get('userGroup').get('organizationName').disable();
  }

  // Validate the password and confirm password fields
  checkPasswords(passwordField: string, confirmPasswordField: string) {
    return (group: FormGroup) => {
      const password = group.controls[passwordField];
      const confirmPassword = group.controls[confirmPasswordField];

      if (password.value !== confirmPassword.value) {
        return confirmPassword.setErrors({ notEqual: true });
      } else {
        return confirmPassword.setErrors(null);
      }
    };
  }

  onSubmit() {
    // Call registration service here
    this.authenticationService.register(
      this.registerForm.get('loginGroup').get('email').value,
      this.registerForm.get('loginGroup').get('email').value,
      this.registerForm.get('loginGroup').get('password').value,
      this.registerForm.get('userGroup').get('firstName').value,
      this.registerForm.get('userGroup').get('lastName').value,
      this.registerForm.get('userGroup').get('dob').value,
      this.registerForm.get('addressGroup').get('address').value,
      this.registerForm.get('addressGroup').get('city').value,
      this.registerForm.get('addressGroup').get('state').value,
      this.registerForm.get('addressGroup').get('zip').value,
      this.registerForm.get('userGroup').get('phone').value,
      this.registerForm.get('userGroup').get('organizationName').value, '')
      .pipe(first())
      .subscribe(
        user => {
          this.snackBar.open('Registration Successful', 'X', {
            duration: 4000,
            verticalPosition: this.topPosition,
            horizontalPosition: this.centerPosition
          });

          this.router.navigate(['/login']);
        },
        error => {
          this.error = error;
        }
      );
  }



  // Get validation error message
  getErrorMessage(groupName: string, controlName: string) {
    return this.registerForm
      .get(groupName)
      .get(controlName)
      .hasError('required')
      ? 'You must enter a value'
      : this.registerForm
          .get(groupName)
          .get(controlName)
          .hasError('email')
      ? 'Not a valid email'
      : this.registerForm
          .get(groupName)
          .get(controlName)
          .hasError('notEqual')
      ? 'Passwords do not match'
      : this.registerForm
          .get(groupName)
          .get(controlName)
          .hasError('minlength')
      ? 'Too short'
      : this.registerForm
          .get(groupName)
          .get(controlName)
          .hasError('maxlength')
      ? 'Too long'
      : '';
  }

  openTermsDialog() {
    // Open the dialog that contants the terms of use policy
    const dialogRef = this.dialog.open(RegistertermsComponent);
  }

  private _filter(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().startsWith(filterValue));
  }
}
