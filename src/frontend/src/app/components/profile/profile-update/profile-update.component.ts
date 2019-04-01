import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { User } from '../../../models/user';


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
  updateForm: FormGroup;
  user: User;
  error = '';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProfileUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.user = data.user;
   }

  ngOnInit() {
    this.updateForm = this.fb.group({
        firstName: [this.user.first_name, [Validators.required, Validators.maxLength(50)]],
        lastName: [this.user.last_name, [Validators.required, Validators.maxLength(50)]],
        email: [this.user.email, [Validators.required, Validators.email, Validators.maxLength(200)]],
        dob: [this.user.date_of_birth],
        phone: [this.user.phone],
        address: [this.user.address],
        city: [this.user.city],
        state: [this.user.state],
        zip: [this.user.zip_code],
      });
  }

  onSubmit() {





    this.dialogRef.close(this.updateForm.value);
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

