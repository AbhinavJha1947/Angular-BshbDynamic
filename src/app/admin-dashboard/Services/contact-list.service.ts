import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(this.configService.ContactList).pipe(
      catchError(this.handleError)
    );
  }

  addContact(contact: any): Observable<any> {
    return this.http.post<any>(this.configService.ContactList, contact).pipe(
      catchError(this.handleError)
    );
  }

  updateContact(id: string, contact: any): Observable<void> {
    return this.http.put<void>(`${this.configService.ContactList}/${id}`, contact).pipe(
      catchError(this.handleError)
    );
  }

  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.configService.ContactList}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Server Error:', error);
    return throwError(error);
  }
}
