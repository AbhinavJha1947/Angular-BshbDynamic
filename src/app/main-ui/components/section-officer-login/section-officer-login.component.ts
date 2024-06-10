import { Component } from '@angular/core';

@Component({
  selector: 'app-section-officer-login',
  templateUrl: './section-officer-login.component.html',
  styleUrls: ['./section-officer-login.component.css']
})
export class SectionOfficerLoginComponent {
  mobno: string;

  constructor() {
    this.mobno = '';
  }

  login() {
    // Implement your login logic here
    console.log('Mobile number:', this.mobno);
  }
}
