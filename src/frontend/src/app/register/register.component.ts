import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  public errors: any = [];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userGroup: this.fb.group({
        username: ['', [Validators.required, Validators.maxLength(100)]],
        firstName: ['', [Validators.required, Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]]
        }),
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
      },
      {
        validator: this.checkPasswords('password', 'confirmPassword')
      }),
      acceptTerms: ['', [Validators.requiredTrue]]
    });
  }

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
      this.registerForm.get('userGroup').get('username').value,
      this.registerForm.get('userGroup').get('email').value,
      this.registerForm.get('passwordGroup').get('password').value,
      this.registerForm.get('userGroup').get('firstName').value,
      this.registerForm.get('userGroup').get('lastName').value
    );
  }

  register(username: string, emailAddress: string, password: string, firstName: string, lastName: string) {
    console.log('Register: ' + emailAddress + ', ' + password + ', ' + firstName + ' ' + lastName);

    // Call registration service here
  }

  getErrorMessage(groupName: string, controlName: string) {
    return this.registerForm.get(groupName).get(controlName).hasError('required') ? 'You must enter a value' :
           this.registerForm.get(groupName).get(controlName).hasError('email') ? 'Not a valid email' :
           this.registerForm.get(groupName).get(controlName).hasError('notEqual') ? 'Passwords do not match' :
           this.registerForm.get(groupName).get(controlName).hasError('minlength') ? 'Too short' :
           this.registerForm.get(groupName).get(controlName).hasError('maxlength') ? 'Too long' :
           '';
  }
}
