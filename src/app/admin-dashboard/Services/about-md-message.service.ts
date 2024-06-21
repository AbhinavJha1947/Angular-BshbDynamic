import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

interface MdMessage {
  id?: number;
  message: string; 
  createddate?: Date; 
  updateddate?: Date; 
}

@Injectable({
  providedIn: 'root'
})
export class AboutMdMessageService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  getMessages(): Observable<MdMessage[]> {
    return this.http.get<MdMessage[]>(this.configService.MDMessage);
  }

  addMessage(message: MdMessage): Observable<MdMessage> {
    return this.http.post<MdMessage>(this.configService.MDMessage, message);
  }

  updateMessage(id: number, message: MdMessage): Observable<void> {
    return this.http.put<void>(`${this.configService.MDMessage}/${id}`, message);
  }

  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.MDMessage}/${id}`);
  }
}
