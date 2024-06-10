import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  private apiUrl = 'https://localhost:7169/api/ContactList'; 

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addContact(contact: any): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }

  updateContact(id: string, contact: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, contact);
  }

  deleteContact(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
