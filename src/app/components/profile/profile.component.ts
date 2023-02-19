import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  template: `
    <div class="header">
      <div class="menuBurger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="title"><h2>Profile</h2></div>
      <div class="plan">14 Day</div>
    </div>
    <div class="loggedUser">
      <span class="name">{{ username ? username : 'Noa Niv' }}</span>
      <span class="email">{{ email ? email : 'noaniv@gmail.com' }}</span>
    </div>
    <div class="myProfileWrapper">
      <div class="myProfile">
        <div class="circle"><mat-icon>person_outline</mat-icon></div>
        <div class="textWrapper">
          <span><h2>My Profile</h2></span>
          <span><h5>Make changes to your account</h5></span>
        </div>
        <div class="warningIcon"><mat-icon>warning</mat-icon></div>
        <div class="arrowIcon"><mat-icon>keyboard_arrow_right</mat-icon></div>
      </div>
      <div class="accSettings">
        <div class="circle"><mat-icon>settings</mat-icon></div>
        <div class="textWrapper">
          <span><h2>Account settings</h2></span>
          <span><h5>Manage your saved account</h5></span>
        </div>
        <div class="arrowIcon"><mat-icon>keyboard_arrow_right</mat-icon></div>
      </div>
    </div>
    <h5 class="aboutTitle">About</h5>

    <div class="aboutWrapper">
      <div class="help">
        <div class="circle">
          <mat-icon>notifications_none</mat-icon>
        </div>
        <div class="textWrapper">
          <h2>Help & Support</h2>
        </div>
        <div class="arrowIcon">
          <mat-icon>keyboard_arrow_right </mat-icon>
        </div>
      </div>
      <div class="aboutApp">
        <div class="circle">
          <mat-icon>favorite_border</mat-icon>
        </div>
        <div class="textWrapper">
          <h2>About App</h2>
        </div>
        <div class="arrowIcon">
          <mat-icon>keyboard_arrow_right </mat-icon>
        </div>
      </div>
      <div class="privacy">
        <div class="circle">
          <mat-icon>favorite_border</mat-icon>
        </div>
        <div class="textWrapper">
          <h2>Privacy policy</h2>
        </div>
        <div class="arrowIcon">
          <mat-icon>keyboard_arrow_right </mat-icon>
        </div>
      </div>
      <div class="terms">
        <div class="circle">
          <mat-icon>favorite_border</mat-icon>
        </div>
        <div class="textWrapper">
          <h2>Terms and Conditions</h2>
        </div>
        <div class="arrowIcon">
          <mat-icon>keyboard_arrow_right </mat-icon>
        </div>
      </div>
    </div>

    <div class="logoutWrapper">
      <div class="logout" (click)="logout()">
        <div class="circle"><mat-icon>exit_to_app</mat-icon></div>
        <div class="textWrapper">
          <span><h2>Log Out</h2></span>
          <span><h5>Further secure your account for safety</h5></span>
        </div>
        <div class="arrowIcon"><mat-icon>keyboard_arrow_right</mat-icon></div>
      </div>
    </div>

    <button class="updatePlanBtn">Update Plan</button>

    <div class="footerMenu">
      <div class="footerItem">
        <img
          src="/assets/images/profile/1.png"
          id="item1"
          width="35px"
          height="38px"
        />
        <label for="item1">Meal Plan</label>
      </div>
      <div class="footerItem">
        <img
          src="/assets/images/profile/2.png"
          id="item2"
          width="70px"
          height="38px"
        />
        <label for="item2">Recipes</label>
      </div>
      <div class="footerItem">
        <img
          src="/assets/images/profile/3.png"
          id="item3"
          width="50px"
          height="38px"
        />
        <label for="item3">Grocery List</label>
      </div>
      <div class="footerItem">
        <img
          src="/assets/images/profile/4.png"
          id="item4"
          width="60px"
          height="38px"
        />
        <label for="item4">Education</label>
      </div>
    </div>
  `,
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username: string | null | undefined;
  email: string | null | undefined;
  constructor(private auth: AuthService) {
    this.username = null;
    this.email = null;
  }
  ngOnInit(): void {
    const user: User = this.auth.getUser();
    if (user.email) {
      this.email = user?.email;
      this.username =
        this.capitalizeFirstLetter(user?.name.firstname) +
        ' ' +
        this.capitalizeFirstLetter(user?.name.lastname);
    }
  }

  capitalizeFirstLetter(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }

  logout() {
    this.auth.logout();
  }
}
