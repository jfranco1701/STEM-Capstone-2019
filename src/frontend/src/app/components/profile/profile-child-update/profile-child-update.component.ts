import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-profile-child-update',
  templateUrl: './profile-child-update.component.html',
  styleUrls: ['./profile-child-update.component.scss']
})
export class ProfileChildUpdateComponent implements OnInit {
  updateForm: FormGroup;
  user: User;
  error = '';
  topPosition: MatSnackBarVerticalPosition = 'top';
  centerPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProfileChildUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.user = data.user;
  }

  ngOnInit() {
    this.updateForm = this.fb.group({
      firstName: [this.user.first_name, [Validators.required, Validators.maxLength(50)]],
      lastName: [this.user.last_name, [Validators.required, Validators.maxLength(50)]],
      email: [this.user.email, [Validators.required, Validators.email, Validators.maxLength(200)]],
      dob: [this.user.date_of_birth],
    });
  }

  onSubmit() {
    const userObject = {
      first_name: this.updateForm.get('firstName').value,
      last_name: this.updateForm.get('lastName').value,
      email: this.updateForm.get('email').value,
      date_of_birth: this.updateForm.get('dob').value
    };

    this.userService.updateUser(this.user.id, userObject)
      .pipe(first())
      .subscribe(
        user => {
          this.snackBar.open('Update Successful', 'X', {
            duration: 3000,
            verticalPosition: this.topPosition,
            horizontalPosition: this.centerPosition
          });

          this.dialogRef.close(user);
        },
        error => {
          this.error = error;
        }
      );
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = 'Are you sure you want to delete the user?';
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(this.user.id).subscribe(
          res => {
            this.dialogRef.close();
          });
      }
    });
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
