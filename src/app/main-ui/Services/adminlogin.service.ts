import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  private loggedIn: boolean = false;

  constructor(private http: HttpClient, private configService: ConfigService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.configService.Adminlogin}`, { username, password })
      .pipe(
        tap((response: any) => {
          if (response.email) {  
            this.loggedIn = true;
          }
        })
      );
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.configService.Adminloginverify}`, { email, otp })
      .pipe(
        tap((response: any) => {
          if (response.message === 'OTP verified successfully') {  
            this.loggedIn = true;
          }
        })
      );
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
