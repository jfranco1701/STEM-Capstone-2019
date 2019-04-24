import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { User } from '../../../models/user';
import { Tag } from '../../../models/tag';
import { UserService } from 'src/app/services/user.service';
import { TagService } from '../../../services/tag.service';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
  updateForm: FormGroup;
  user: User;
  tags: Tag[];
  error = '';
  topPosition: MatSnackBarVerticalPosition = 'top';
  centerPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(
    private authenticationService: AuthenticationService,
    private tagService: TagService,
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
        interests: [this.user.interests]
      });
    this.getTags();
  }

  onSubmit() {
    const userId = this.authenticationService.userId;
    const userObject = {
      first_name: this.updateForm.get('firstName').value,
      last_name: this.updateForm.get('lastName').value,
      email: this.updateForm.get('email').value,
      date_of_birth: this.updateForm.get('dob').value,
      phone: this.updateForm.get('phone').value,
      address: this.updateForm.get('address').value,
      city: this.updateForm.get('city').value,
      state: this.updateForm.get('state').value,
      zip_code: this.updateForm.get('zip').value,
      interests: this.updateForm.get('interests').value
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

  getTags() {
    this.tagService.getTags()
    .subscribe(tags => {
      this.tags = tags;
    });
  }
}

