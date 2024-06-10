import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PositiveNote {
  id?: number;
  title: string;
  text: string;
}
@Injectable({
  providedIn: 'root'
})
export class HomePositivenoteService  {
  private apiUrl = 'https://localhost:7169/api/positive-note';

  constructor(private http: HttpClient) { }

  getPositiveNotes(): Observable<PositiveNote[]> {
    return this.http.get<PositiveNote[]>(this.apiUrl);
  }

  addPositiveNote(note: PositiveNote): Observable<PositiveNote> {
    return this.http.post<PositiveNote>(this.apiUrl, note);
  }

  updatePositiveNote(id: number, note: PositiveNote): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, note);
  }

  deletePositiveNote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
