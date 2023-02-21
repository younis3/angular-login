import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  email: string | null | undefined;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  birthday: string | null | undefined;
  sex: string | null | undefined;

  constructor(private router: Router, private auth: AuthService) {
    this.email = null;
    this.firstName = null;
    this.lastName = null;
  }

  ngOnInit(): void {
    const user: User = this.auth.getUser();
    if (user.email) {
      this.email = user?.email;
      this.firstName = this.capitalizeFirstLetter(user?.name.firstname);
      this.lastName = this.capitalizeFirstLetter(user?.name.lastname);
      this.birthday = user?.birthday.toDateString();
      this.sex = user?.sex;
    }
  }

  update() {
    this.auth.setUser(
      this.email,
      this.firstName,
      this.lastName,
      this.birthday,
      this.sex
    );
    this.router.navigate(['/profile']);
  }

  capitalizeFirstLetter(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }

  back() {
    this.router.navigate(['/profile']);
  }
}
