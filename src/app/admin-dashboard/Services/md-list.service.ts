import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class MdListService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  getMdListItems(): Observable<any[]> {
    return this.http.get<any[]>(this.configService.mdlisturl);
  }

  addMdListItem(item: any): Observable<any> {
    return this.http.post<any>(this.configService.mdlisturl, item);
  }

  updateMdListItem(id: number, item: any): Observable<void> {
    return this.http.put<void>(`${this.configService.mdlisturl}/${id}`, item);
  }

  deleteMdListItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.mdlisturl}/${id}`);
  }
}
