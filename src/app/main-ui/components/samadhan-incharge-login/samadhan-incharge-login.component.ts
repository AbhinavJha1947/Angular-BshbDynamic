import { Component } from '@angular/core';

@Component({
  selector: 'app-samadhan-incharge-login',
  templateUrl: './samadhan-incharge-login.component.html',
  styleUrls: ['./samadhan-incharge-login.component.css']
})
export class SamadhanInchargeLoginComponent {
  mobno: string;

  constructor() {
    this.mobno = '';
  }

  login() {
    // Implement your login logic here
    console.log('Mobile number:', this.mobno);
  }
}
