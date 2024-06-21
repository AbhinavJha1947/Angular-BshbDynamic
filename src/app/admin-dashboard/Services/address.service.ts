import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAddresses(): Observable<any> {
    return this.http.get(this.configService.RegisteredOffices);
  }

  addAddress(address: any): Observable<any> {
    return this.http.post(this.configService.RegisteredOffices, address);
  }

  updateAddress(address: any): Observable<any> {
    return this.http.put(this.configService.RegisteredOffices, address);
  }

  deleteAddress(id: string): Observable<any> {
    return this.http.delete(`${this.configService.RegisteredOffices}/${id}`);
  }
}
