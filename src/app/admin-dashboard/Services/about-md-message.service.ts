import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MdMessage {
  id?: number;
  text: string;
}
@Injectable({
  providedIn: 'root'
})
export class AboutMdMessageService {
  private apiUrl = 'https://localhost:7210/api/md-message';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<MdMessage[]> {
    return this.http.get<MdMessage[]>(this.apiUrl);
  }

  addMessage(message: MdMessage): Observable<MdMessage> {
    return this.http.post<MdMessage>(this.apiUrl, message);
  }

  updateMessage(id: number, message: MdMessage): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, message);
  }

  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
