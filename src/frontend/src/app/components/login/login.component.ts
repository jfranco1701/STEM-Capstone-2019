import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public errors: any = [];
  error = '';

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    this.authenticationService.login(
      this.loginForm.get('email').value,
      this.loginForm.get('password').value)
      .pipe(first())
      .subscribe(user => {
        if (user) {
          this.router.navigate(['/home']);
        }
      },
        error => {
          this.error = error;
        });
  }

  getErrorMessage(controlName: string) {
    return this.loginForm.get(controlName).hasError('required') ? 'You must enter a value' :
      this.loginForm.get(controlName).hasError('email') ? 'Not a valid email' :
        this.loginForm.get(controlName).hasError('notEqual') ? 'Passwords do not match' :
          this.loginForm.get(controlName).hasError('minlength') ? 'Too short' :
            this.loginForm.get(controlName).hasError('maxlength') ? 'Too long' :
              '';
  }
}
