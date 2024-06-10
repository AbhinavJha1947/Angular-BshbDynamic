import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface NewScheme {
  id?: number;
  text: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class HomeNewschemeService {
  private apiUrl = 'https://localhost:7169/api/newScheme';

  constructor(private http: HttpClient) { }

  getNewSchemes(): Observable<NewScheme[]> {
    return this.http.get<NewScheme[]>(this.apiUrl);
  }

  addNewScheme(scheme: NewScheme): Observable<NewScheme> {
    return this.http.post<NewScheme>(this.apiUrl, scheme);
  }

  updateNewScheme(id: number, scheme: NewScheme): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, scheme);
  }

  deleteNewScheme(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
