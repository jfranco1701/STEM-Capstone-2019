import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public errors: any = [];

  constructor(
    private fb: FormBuilder, private _userService: UserService
    ){}
   

  ngOnInit() {

    this.loginForm = this.fb.group({
      userGroup: this.fb.group({
        email: ['', [Validators.required, Validators.maxLength(200)]]
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

    //calling login service
    this._userService.login({'username': emailAddress, 'password': password});
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