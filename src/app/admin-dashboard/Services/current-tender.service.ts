import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrentTenderService {
  private apiUrl = 'https://localhost:7169/api/CurrentTenders'; 

  constructor(private http: HttpClient) { }

  getCurrentTenders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addCurrentTenders(employee: any): Observable<any> {
    return this.http.post(this.apiUrl, employee);
  }

  updateCurrentTenders(id: string, employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  deleteCurrentTenders(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
