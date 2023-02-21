import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  username: string = '';
  password: string = '';
  isError: boolean = false;
  imgsrc: string = '';
  ngOnInit(): void {
    this.imgsrc = 'assets/arrow_backward_24px.png';
  }

  back() {
    this.router.navigate(['/profile']);
  }
  validateLogin1(type: string) {
    if (this.username.trim() !== '' && this.password.trim() !== '') {
      const userEmail = this.auth.getUser().email;
      const userPass = this.auth.getUser().password;
      if (this.username === userEmail && this.password === userPass) {
        if (type === 'reset') {
          this.loginandroute('reset');
        } else {
          this.loginandroute('delete');
        }
      } else {
        this.isError = true;
        alert('Wrong Email/Password combination');
      }
    } else {
      this.isError = true;
      alert('Wrong Email/Password combination');
    }
  }

  loginandroute(type: string): any {
    this.auth.login(this.username, this.password).subscribe((user) => {
      if (user !== null) {
        if (user.email !== null) {
          //login success
          if (type === 'reset') {
            this.auth.resetUser();
            this.router.navigate(['/profile']);
          } else if (type === 'delete') {
            if (
              window.confirm(
                'You are about to delete your user. Warning! your entire data will be erased!! Are you sure??'
              )
            ) {
              alert('Your account was removed successfully!!');
              this.auth.logout();
            }
          }
        } else {
          this.isError = true;
        }
      } else {
        this.isError = true;
      }
    });
  }
}
