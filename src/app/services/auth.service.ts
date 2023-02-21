import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  ALL_USERS_API_URL: string = 'https://fakestoreapi.com/users';

  private currUser: User;
  private defEmail: string;
  private defFirstName: string;
  private defLastName: string;
  private defBirthday: Date;
  private defSex: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.currUser = { id: null, email: null, password: null, name: null };
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient
      .get<User[]>(this.ALL_USERS_API_URL, {
        params: {
          email,
          password,
        },
      })
      .pipe(
        map((response) => {
          response.map((user) => {
            if (user.email === email) {
              if (user.password === password) {
                this.currUser.email = user.email;
                this.currUser.password = user.password;
                this.currUser.name = user.name;
                this.currUser.birthday = new Date('12/02/1980');
                this.currUser.sex = 'Female';
                this.defEmail = user.email;
                this.defFirstName = user.name.firstname;
                this.defLastName = user.name.lastname;
                this.defBirthday = new Date('12/02/1980');
                this.defSex = 'Female';
              } else {
                console.log('wrong email/password');
              }
            }
          });
          return this.currUser;
        })
      );
  }

  getUser() {
    return this.currUser;
  }

  setUser(
    email: string,
    fname: string,
    lname: string,
    bday: string,
    sex: string
  ) {
    this.currUser.email = email;
    this.currUser.name.firstname = fname;
    this.currUser.name.lastname = lname;
    this.currUser.birthday = new Date(bday);
    this.currUser.sex = sex;
  }

  resetUser() {
    this.currUser.email = this.defEmail;
    this.currUser.name.firstname = this.defFirstName;
    this.currUser.name.lastname = this.defLastName;
    this.currUser.birthday = this.defBirthday;
    this.currUser.sex = this.defSex;
  }

  logout() {
    this.currUser = { id: null, email: null, password: null, name: null };
    this.router.navigate(['/']);
  }
}
