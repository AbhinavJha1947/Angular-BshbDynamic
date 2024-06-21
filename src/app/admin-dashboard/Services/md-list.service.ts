import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

interface Md {
  id?: number;
  name: string;
  fromDate: string;
  toDate: string;
  photo: string;
}

@Injectable({
  providedIn: 'root'
})
export class MdListService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  getMdListItems(): Observable<Md[]> {
    return this.http.get<Md[]>(this.configService.mdlisturl);
  }

  addMdListItem(item: Md): Observable<Md> {
    return this.http.post<Md>(this.configService.mdlisturl, item);
  }

  updateMdListItem(id: number, item: Md): Observable<void> {
    return this.http.put<void>(`${this.configService.mdlisturl}/${id}`, item);
  }

  deleteMdListItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.mdlisturl}/${id}`);
  }
}
