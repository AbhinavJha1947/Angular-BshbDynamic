import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

interface PositiveNote {
  id?: number;
  title: string;
  text: string;
}
@Injectable({
  providedIn: 'root'
})
export class HomePositivenoteService  {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getPositiveNotes(): Observable<PositiveNote[]> {
    return this.http.get<PositiveNote[]>(this.configService.positivenoteurl);
  }

  addPositiveNote(note: PositiveNote): Observable<PositiveNote> {
    return this.http.post<PositiveNote>(this.configService.positivenoteurl, note);
  }

  updatePositiveNote(id: number, note: PositiveNote): Observable<void> {
    return this.http.put<void>(`${this.configService.positivenoteurl}/${id}`, note);
  }

  deletePositiveNote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.positivenoteurl}/${id}`);
  }
}
