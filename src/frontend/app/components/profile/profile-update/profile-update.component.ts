import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from 'frontend/app/services/user.service';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { first } from 'rxjs/operators';
import { Common } from '../../shared/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
  updateForm: FormGroup;
  user: User;
  error = '';
  topPosition: MatSnackBarVerticalPosition = 'top';
  centerPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProfileUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.user = data.user;
   }

   phonePattern = '^[0-9]{3}-[0-9]{3}-[0-9]{4}?$';
   zipPattern = '^[0-9]{5}(?:-[0-9]{4})?$';

  ngOnInit() {
    this.updateForm = this.fb.group({
        firstName: [this.user.first_name, [Validators.required, Validators.maxLength(50)]],
        lastName: [this.user.last_name, [Validators.required, Validators.maxLength(50)]],
        email: [this.user.email, [Validators.required, Validators.email, Validators.maxLength(200)]],
        dob: [this.user.date_of_birth],
        phone: [this.user.phone, [Validators.pattern(this.phonePattern)]],
        address: [this.user.address],
        city: [this.user.city],
        state: [this.user.state],
        zip: [this.user.zip_code, [Validators.pattern(this.zipPattern)]],
      });
  }

  onSubmit() {
    const common = new Common();

    const userId = common.getUserId();
    const userObject = {
      first_name: this.updateForm.get('firstName').value,
      last_name: this.updateForm.get('lastName').value,
      email: this.updateForm.get('email').value,
      dob: this.updateForm.get('dob').value,
      phone: this.updateForm.get('phone').value,
      address: this.updateForm.get('address').value,
      city: this.updateForm.get('city').value,
      state: this.updateForm.get('state').value,
      zip: this.updateForm.get('zip').value
    };

    this.userService.updateUser(userId, userObject)
    .pipe(first())
    .subscribe(
      user => {
        this.snackBar.open('Update Successful', 'X', {
          duration: 3000,
          verticalPosition: this.topPosition,
          horizontalPosition: this.centerPosition
        });

        this.dialogRef.close(this.updateForm.value);
      },
      error => {
        this.error = error;
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

    // Get validation error message
    getErrorMessage(controlName: string) {
      return this.updateForm
        .get(controlName)
        .hasError('required')
        ? 'You must enter a value'
        : this.updateForm
            .get(controlName)
            .hasError('email')
        ? 'Not a valid email'
        : this.updateForm
            .get(controlName)
            .hasError('notEqual')
        ? 'Passwords do not match'
        : this.updateForm
            .get(controlName)
            .hasError('minlength')
        ? 'Too short'
        : this.updateForm
            .get(controlName)
            .hasError('maxlength')
        ? 'Too long'
        : '';
    }

}

