import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RegistertermsComponent } from './registerterms/registerterms.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  public errors: any = [];

  constructor(
    private fb: FormBuilder, public dialog: MatDialog,
  ) { }

  // Define the register form
  ngOnInit() {
    this.registerForm = this.fb.group({
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
      loginGroup: this.fb.group({
        username: ['', [Validators.required, Validators.maxLength(100)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
      },
      {
        validator: this.checkPasswords('password', 'confirmPassword')
      }),
      acceptTerms: ['', [Validators.requiredTrue]]
    });
  }

  // Validate the password and confirm password fields
  checkPasswords(passwordField: string, confirmPasswordField: string) {
    return (group: FormGroup) => {
      const password = group.controls[passwordField];
      const confirmPassword = group.controls[confirmPasswordField];

      if (password.value !== confirmPassword.value) {
        return confirmPassword.setErrors({notEqual: true});
      } else {
        return confirmPassword.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.register(
      this.registerForm.get('loginGroup').get('username').value,
      this.registerForm.get('userGroup').get('email').value,
      this.registerForm.get('loginGroup').get('password').value,
      this.registerForm.get('userGroup').get('firstName').value,
      this.registerForm.get('userGroup').get('lastName').value
    );
  }

  register(username: string, emailAddress: string, password: string, firstName: string, lastName: string) {
    console.log('Register: ' + emailAddress + ', ' + password + ', ' + firstName + ' ' + lastName);

    // Call registration service here
  }

  // Get validation error message
  getErrorMessage(groupName: string, controlName: string) {
    return this.registerForm.get(groupName).get(controlName).hasError('required') ? 'You must enter a value' :
           this.registerForm.get(groupName).get(controlName).hasError('email') ? 'Not a valid email' :
           this.registerForm.get(groupName).get(controlName).hasError('notEqual') ? 'Passwords do not match' :
           this.registerForm.get(groupName).get(controlName).hasError('minlength') ? 'Too short' :
           this.registerForm.get(groupName).get(controlName).hasError('maxlength') ? 'Too long' :
           '';
  }

  openTermsDialog() {
    // Open the dialog that contants the terms of use policy
    const dialogRef = this.dialog.open(RegistertermsComponent);
  }
}
