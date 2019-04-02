import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { first } from 'rxjs/operators';
import { Common } from '../../shared/common';
import { UserLogin } from '../../../models/UserLogin';

@Component({
  selector: 'app-profile-child-add',
  templateUrl: './profile-child-add.component.html',
  styleUrls: ['./profile-child-add.component.scss']
})
export class ProfileChildAddComponent implements OnInit {
  addForm: FormGroup;
  error = '';
  topPosition: MatSnackBarVerticalPosition = 'top';
  rightPosition: MatSnackBarHorizontalPosition = 'right';
  common: Common;
  userId: number;
  userLogin: UserLogin;

  constructor(private fb: FormBuilder, private router: Router,
              private authenticationService: AuthenticationService, private snackBar: MatSnackBar) { }



  ngOnInit() {
    this.common = new Common();
    this.userId = this.common.getUserId();

    this.addForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      dob: [''],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    },
    {
      validator: this.checkPasswords('password', 'confirmPassword'),
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

  close() {
    this.router.navigate(['/profile']);
  }

  onSubmit() {
    // Call registration service here
    console.log(this.userId);

    this.authenticationService
      .register(
        this.addForm.get('email').value,
        this.addForm.get('email').value,
        this.addForm.get('password').value,
        this.addForm.get('firstName').value,
        this.addForm.get('lastName').value,
        this.addForm.get('dob').value,
        '', '', '', '', '', 'http://localhost:8000/api/v1/users/' + this.userId + '/')
      .pipe(first())
      .subscribe(
        user => {
          this.snackBar.open('Registration Successful', 'X', {
            duration: 4000,
            verticalPosition: this.topPosition,
            horizontalPosition: this.rightPosition
          });

          this.router.navigate(['/profile']);
        },
        error => {
          this.error = error;
        }
      );
  }

    // Get validation error message
    getErrorMessage(controlName: string) {
      return this.addForm
        .get(controlName)
        .hasError('required')
        ? 'You must enter a value'
        : this.addForm
            .get(controlName)
            .hasError('email')
        ? 'Not a valid email'
        : this.addForm
            .get(controlName)
            .hasError('notEqual')
        ? 'Passwords do not match'
        : this.addForm
            .get(controlName)
            .hasError('minlength')
        ? 'Too short'
        : this.addForm
            .get(controlName)
            .hasError('maxlength')
        ? 'Too long'
        : '';
    }
}
