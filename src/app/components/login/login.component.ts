import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="title">
      <span><h5>Welcome Back!!!</h5></span>
      <span><h1>Login</h1></span>
    </div>
    <div class="formContainer">
      <form>
        <div class="usernameWrapper" id="username">
          <input
            type="text"
            placeholder="username/email"
            style="border: none;"
            (focus)="loginFocusUsername()"
            (blur)="loginFocusUsername()"
            [(ngModel)]="username"
            [ngModelOptions]="{ standalone: true }"
            required
          />
          <mat-icon>remove_red_eye</mat-icon>
          <div class="usernameWithinBorder" *ngIf="isFocusUsername">
            username/email
          </div>
        </div>
        <div class="passWrapper" id="pass">
          <input
            type="password"
            placeholder="password"
            style="border: none;"
            (focus)="loginFocusPassword()"
            (blur)="loginFocusPassword()"
            [(ngModel)]="password"
            [ngModelOptions]="{ standalone: true }"
            required
          />
          <mat-icon>lock</mat-icon>
          <div class="passwordWithinBorder" *ngIf="isFocusPassword">
            password
          </div>
        </div>
        <div class="loginError" *ngIf="isError">
          Error: Incorrect username or password!
        </div>
        <div class="rememberForgotPassWrapper">
          <div class="rememberMe">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              [(ngModel)]="isRememberMe"
              [ngModelOptions]="{ standalone: true }"
            />
            <label for="rememberMe"
              ><span id="rememberMeText">Remember Me</span></label
            >
          </div>
          <div class="forgotPass">Forgot Password?</div>
        </div>
        <button id="loginBtn" (click)="validateLogin()">Login</button>
        <div class="register">
          Don't have an account? <a routerLink="/register">Register</a>
        </div>
        <div class="googleFacebookAppleContainer">
          <img src="/assets/images/google-logo.png" width="50px" />
          <img src="/assets/images/facebook-logo.png" width="50px" />
          <img src="/assets/images/apple-logo.png" width="50px" />
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isFocusUsername: boolean;
  isFocusPassword: boolean;
  isError: boolean;
  username: string;
  password: string;
  isRememberMe: boolean;

  constructor(private router: Router, private auth: AuthService) {
    this.isFocusUsername = false;
    this.isFocusPassword = false;
    this.isError = false;
    this.username = '';
    this.password = '';
    this.isRememberMe = false;
  }

  loginFocusUsername() {
    this.isFocusUsername = !this.isFocusUsername;
  }

  loginFocusPassword() {
    this.isFocusPassword = !this.isFocusPassword;
  }

  validateLogin() {
    if (this.username.trim() !== '' && this.password.trim() !== '') {
      //validate login API
      this.auth.login(this.username, this.password).subscribe((user) => {
        if (user !== null) {
          if (user.email !== null) {
            //login success
            this.router.navigate(['/loginsuccess']);
          } else {
            this.isError = true;
          }
        } else {
          this.isError = true;
        }
      });
    } else {
      this.isError = true;
    }
  }
}
