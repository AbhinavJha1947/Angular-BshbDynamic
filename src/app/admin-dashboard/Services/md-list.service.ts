import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MdListItem {
  id?: number;
  name: string;
  fromDate: string;
  toDate: string;
  photo: string;
}
@Injectable({
  providedIn: 'root'
})
export class MdListService  {
  private apiUrl = 'https://localhost:7210/api/md-list';

  constructor(private http: HttpClient) { }

  getMdListItems(): Observable<MdListItem[]> {
    return this.http.get<MdListItem[]>(this.apiUrl);
  }

  addMdListItem(item: MdListItem): Observable<MdListItem> {
    return this.http.post<MdListItem>(this.apiUrl, item);
  }

  updateMdListItem(id: number, item: MdListItem): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, item);
  }

  deleteMdListItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
