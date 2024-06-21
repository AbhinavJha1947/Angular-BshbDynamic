import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

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
  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  getContactList(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.configService.ContactList);
  }
}
