import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
