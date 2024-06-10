import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'https://localhost:7210/api/RegisteredOffices';

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addAddress(address: any): Observable<any> {
    return this.http.post(this.apiUrl, address);
  }

  updateAddress(address: any): Observable<any> {
    return this.http.put(this.apiUrl, address);
  }

  deleteAddress(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
