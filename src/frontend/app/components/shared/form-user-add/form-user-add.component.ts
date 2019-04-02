import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { TermsComponent } from '../../shared/terms/terms.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-form-user-add',
  templateUrl: './form-user-add.component.html',
  styleUrls: ['./form-user-add.component.scss'],
})
export class FormUserAddComponent implements OnInit {
  addForm: FormGroup;
  public errors: any = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      userGroup: this.fb.group({
        firstName: ['', [Validators.required, Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
        dob: [''],
        phone: [''],
      }),
      addressGroup: this.fb.group({
        address: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      loginGroup: this.fb.group(
        {
          username: ['', [Validators.required, Validators.maxLength(100)]],
          password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
          confirmPassword: [
            '',
            [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
          ],
        },
        {
          validator: this.checkPasswords('password', 'confirmPassword'),
        }
      ),
      acceptTerms: ['', [Validators.requiredTrue]],
    });
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

  // Get validation error message
  getErrorMessage(groupName: string, controlName: string) {
    return this.addForm
      .get(groupName)
      .get(controlName)
      .hasError('required')
      ? 'You must enter a value'
      : this.addForm
          .get(groupName)
          .get(controlName)
          .hasError('email')
      ? 'Not a valid email'
      : this.addForm
          .get(groupName)
          .get(controlName)
          .hasError('notEqual')
      ? 'Passwords do not match'
      : this.addForm
          .get(groupName)
          .get(controlName)
          .hasError('minlength')
      ? 'Too short'
      : this.addForm
          .get(groupName)
          .get(controlName)
          .hasError('maxlength')
      ? 'Too long'
      : '';
  }

  openTermsDialog() {
    // Open the dialog that contants the terms of use policy
    const dialogRef = this.dialog.open(TermsComponent);
  }

  onSubmit() {
    this.register(
      this.addForm.get('loginGroup').get('username').value,
      this.addForm.get('userGroup').get('email').value,
      this.addForm.get('loginGroup').get('password').value,
      this.addForm.get('userGroup').get('firstName').value,
      this.addForm.get('userGroup').get('lastName').value
    );
  }

  register(username: string, emailAddress: string, password: string, firstName: string, lastName: string) {
    console.log('Register: ' + emailAddress + ', ' + password + ', ' + firstName + ' ' + lastName);

    // Call registration service here

  }



}

