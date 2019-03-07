import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public errors: any = [];

  constructor(
    private fb: FormBuilder,
    ){}
   

  ngOnInit() {

    this.loginForm = this.fb.group({
      userGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]]
        }),
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
      })
    });
  }

  onSubmit() {
    this.login(
      this.loginForm.get('userGroup').get('email').value,
      this.loginForm.get('passwordGroup').get('password').value
    );
  }

  login(emailAddress: string, password: string) {
    console.log('login: ' + emailAddress + ', ' + password );

    // Call login service here
  }

  getErrorMessage(groupName: string, controlName: string) {
    return this.loginForm.get(groupName).get(controlName).hasError('required') ? 'You must enter a value' :
           this.loginForm.get(groupName).get(controlName).hasError('email') ? 'Not a valid email' :
           this.loginForm.get(groupName).get(controlName).hasError('notEqual') ? 'Passwords do not match' :
           this.loginForm.get(groupName).get(controlName).hasError('minlength') ? 'Too short' :
           this.loginForm.get(groupName).get(controlName).hasError('maxlength') ? 'Too long' :
           '';
  }

}
