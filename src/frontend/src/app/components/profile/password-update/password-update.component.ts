import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent implements OnInit {
  updateForm: FormGroup;
  error = '';
  topPosition: MatSnackBarVerticalPosition = 'top';
  centerPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<PasswordUpdateComponent>,
              private authenticationService: AuthenticationService,
              private snackBar: MatSnackBar,
              ) { }

  passwordPattern = '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,20}';

  ngOnInit() {
    this.updateForm = this.fb.group({
      currentPassword: ['', [Validators.required, Validators.maxLength(20)]],
      newPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      confirmNewPassword: [''],
    },
      {
        validator: this.checkPasswords('newPassword', 'confirmNewPassword'),
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

  onSubmit() {
    const password = this.updateForm.get('currentPassword').value;
    const newPassword = this.updateForm.get('newPassword').value;
    const userId = this.authenticationService.userId;

    this.authenticationService.changePassword(userId, password, newPassword)
    .pipe(first())
    .subscribe(
      result => {
        this.snackBar.open('Password changed successfully', 'X', {
          duration: 3000,
          verticalPosition: this.topPosition,
          horizontalPosition: this.centerPosition
        });

        this.dialogRef.close();
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
