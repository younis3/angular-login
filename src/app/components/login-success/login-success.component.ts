import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-success',
  template: `
    <div class="title">
      <h1>Login Successful</h1>
    </div>
    <div class="secondTitle">
      <h4>You have successfully signed into <br />your account</h4>
    </div>
    <div class="loading">
      <img src="/assets/images/loading.gif" width="328px" />
    </div>
  `,
  styleUrls: ['./login-success.component.css'],
})
export class LoginSuccessComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/profile']);
    }, 4000);
  }
}
