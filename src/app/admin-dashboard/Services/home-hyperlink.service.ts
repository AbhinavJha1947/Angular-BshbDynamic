import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface HyperLink {
  name: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class HomeHyperlinkService {
  private apiUrl = 'https://localhost:7210/api/hyperlink';

  constructor(private http: HttpClient) { }

  getHyperLinks(): Observable<HyperLink[]> {
    return this.http.get<HyperLink[]>(this.apiUrl);
  }

  addHyperLink(link: HyperLink): Observable<HyperLink> {
    return this.http.post<HyperLink>(this.apiUrl, link);
  }

  updateHyperLink(id: number, link: HyperLink): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, link);
  }

  deleteHyperLink(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
