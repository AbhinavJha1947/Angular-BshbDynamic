import { Component } from '@angular/core';
import { UserloginService } from '../../Services/userlogin.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent  {
  email: string;
  otp: string;
  isOtpRequested: boolean;
  isOtpVerified: boolean;

  constructor(private UserloginService: UserloginService) {
    this.email = '';
    this.otp = '';
    this.isOtpRequested = false;
    this.isOtpVerified = false;
  }

  requestOtp() {
    this.UserloginService.requestOtp(this.email).subscribe(
      response => {
        console.log(response);
        this.isOtpRequested = true;
      },
      error => {
        console.error(error);
      }
    );
  }

  verifyOtp() {
    this.UserloginService.verifyOtp(this.email, this.otp).subscribe(
      response => {
        console.log(response);
        this.isOtpVerified = true;
      },
      error => {
        console.error(error);
      }
    );
  }
}

