import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

interface Officer {
  id?: number;
  name: string;
  designation: string;
  email: string;
  contactNumber: string;
  photo: string;
}
@Injectable({
  providedIn: 'root'
})
export class OfficerListService  {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getOfficers(): Observable<Officer[]> {
    return this.http.get<Officer[]>(this.configService.officerlist);
  }

  addOfficer(officer: Officer): Observable<Officer> {
    return this.http.post<Officer>(this.configService.officerlist, officer);
  }

  updateOfficer(id: number, officer: Officer): Observable<void> {
    return this.http.put<void>(`${this.configService.officerlist}/${id}`, officer);
  }

  deleteOfficer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.officerlist}/${id}`);
  }
}
