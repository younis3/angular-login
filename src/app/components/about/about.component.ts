import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `
    <div class="aboutContainer">
      <div class="title">
        <h2>About</h2>
        <h4>Meal Plan</h4>
      </div>
      <div class="arrow" (click)="back()">
        <img src="assets/images/arrow.png" />
      </div>
      <div class="image">
        <img
          src="https://www.malwarebytes.com/blog/images/uploads/2019/06/shutterstock_1253457796.jpg"
        />
      </div>
      <div class="team">
        <h3>TEAM</h3>
        <p>Kareen</p>
        <p>Emeel</p>
        <p>Timaa</p>
        <p>Baker</p>
        <p>Ahmed</p>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private router: Router) {}

  back() {
    this.router.navigate(['/profile']);
  }
}
