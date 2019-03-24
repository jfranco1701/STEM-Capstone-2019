import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public errors: any = [];
  user: User;
  error = '';

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService,
              private router: Router) {}

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
    this.authenticationService.login(
      this.loginForm.get('userGroup').get('email').value,
      this.loginForm.get('passwordGroup').get('password').value)
      .pipe(first())
      .subscribe(user => {
        this.user = user;
        this.router.navigate(['/home']);
      },
      error => {
        this.error = error;
      });
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
