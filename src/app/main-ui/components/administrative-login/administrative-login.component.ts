import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../../Services/adminlogin.service';

@Component({
  selector: 'app-administrative-login',
  templateUrl: './administrative-login.component.html',
  styleUrls: ['./administrative-login.component.css']
})
export class AdministrativeLoginComponent {
  username: string = '';
  password: string = '';
  otp: string = '';
  isOtpRequested: boolean = false;
  email: string = '';

  constructor(private adminloginService: AdminloginService, private router: Router) { }

  login(): void {
    this.adminloginService.login(this.username, this.password).subscribe(
      (response: any) => {
        alert(response.message);
        this.isOtpRequested = true;
        this.email = response.email; 
      },
      (error: any) => {
        alert('Invalid credentials');
      }
    );
  }

  verifyOtp(): void {
    console.log('Verifying OTP:', this.otp, 'for email:', this.email);
    this.adminloginService.verifyOtp(this.email, this.otp).subscribe(
      (response: any) => {
        console.log('Verification response:', response);
        alert('OTP verified successfully');
        this.router.navigate(['/admin']);
      },
      (error: any) => {
        console.error('Verification error:', error);
        alert('Invalid OTP or OTP has expired');
      }
    );
  }
}
