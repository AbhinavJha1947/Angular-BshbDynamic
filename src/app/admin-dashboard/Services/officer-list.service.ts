import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class OfficerListService  {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getOfficers(): Observable<any[]> {
    return this.http.get<any[]>(this.configService.officerlist);
  }

  addOfficer(officer: any): Observable<any> {
    return this.http.post<any>(this.configService.officerlist, officer);
  }

  updateOfficer(id: number, officer: any): Observable<void> {
    return this.http.put<void>(`${this.configService.officerlist}/${id}`, officer);
  }

  deleteOfficer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.officerlist}/${id}`);
  }
}
