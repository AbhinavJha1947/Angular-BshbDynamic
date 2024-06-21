import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

interface NewScheme {
  id?: number;
  text: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class HomeNewschemeService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getNewSchemes(): Observable<NewScheme[]> {
    return this.http.get<NewScheme[]>(this.configService.newScheme);
  }

  addNewScheme(scheme: NewScheme): Observable<NewScheme> {
    return this.http.post<NewScheme>(this.configService.newScheme, scheme);
  }

  updateNewScheme(id: number, scheme: NewScheme): Observable<void> {
    return this.http.put<void>(`${this.configService.newScheme}/${id}`, scheme);
  }

  deleteNewScheme(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.newScheme}/${id}`);
  }
}
