import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';


@Injectable({
  providedIn: 'root'
})
export class AboutMdMessageService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.configService.MDMessage);
  }

  addMessage(message: any): Observable<any> {
    return this.http.post<any>(this.configService.MDMessage, message);
  }

  updateMessage(id: number, message: any): Observable<void> {
    return this.http.put<void>(`${this.configService.MDMessage}/${id}`, message);
  }

  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.MDMessage}/${id}`);
  }
}
