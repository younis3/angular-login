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
                this.currUser.name = user.name;
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

  logout() {
    this.currUser = { id: null, email: null, password: null, name: null };
    this.router.navigate(['/']);
  }
}
