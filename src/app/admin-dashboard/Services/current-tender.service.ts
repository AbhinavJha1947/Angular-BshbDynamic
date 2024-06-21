import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentTenderService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  getCurrentTenders(): Observable<any> {
    return this.http.get(this.configService.CurrentTenders);
  }

  addCurrentTenders(employee: any): Observable<any> {
    return this.http.post(this.configService.CurrentTenders, employee);
  }

  updateCurrentTenders(id: string, employee: any): Observable<any> {
    return this.http.put(`${this.configService.CurrentTenders}/${id}`, employee);
  }

  deleteCurrentTenders(id: string): Observable<any> {
    return this.http.delete(`${this.configService.CurrentTenders}/${id}`);
  }
}
