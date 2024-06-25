import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  requestOtp(email: string): Observable<any> {
    return this.http.post(`${this.configService.userloginsendotp}`, { email }, { responseType: 'text' });
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.configService.userloginverifyotp}`,  { email }, { responseType: 'text' });
  }
}
