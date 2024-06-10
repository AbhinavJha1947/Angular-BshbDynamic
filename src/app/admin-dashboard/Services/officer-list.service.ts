import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Officer {
  id?: number;
  name: string;
  designation: string;
  email: string;
  contactNumber: string;
  photo: string;
}
@Injectable({
  providedIn: 'root'
})
export class OfficerListService  {
  private apiUrl = 'https://localhost:7210/api/officerlist';

  constructor(private http: HttpClient) { }

  getOfficers(): Observable<Officer[]> {
    return this.http.get<Officer[]>(this.apiUrl);
  }

  addOfficer(officer: Officer): Observable<Officer> {
    return this.http.post<Officer>(this.apiUrl, officer);
  }

  updateOfficer(id: number, officer: Officer): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, officer);
  }

  deleteOfficer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
