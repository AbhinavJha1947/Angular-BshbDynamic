import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Contact {
  id: number;
  name: string;
  department: string;
  designation: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private apiUrl = 'https://localhost:7169/api/ContactList';

  constructor(private http: HttpClient) {}

  getContactList(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }
}
