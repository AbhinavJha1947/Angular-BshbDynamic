import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

interface HyperLink {
  name: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class HomeHyperlinkService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getHyperLinks(): Observable<HyperLink[]> {
    return this.http.get<HyperLink[]>(this.configService.hyperlink);
  }

  addHyperLink(link: HyperLink): Observable<HyperLink> {
    return this.http.post<HyperLink>(this.configService.hyperlink, link);
  }

  updateHyperLink(id: number, link: HyperLink): Observable<void> {
    return this.http.put<void>(`${this.configService.hyperlink}/${id}`, link);
  }

  deleteHyperLink(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.hyperlink}/${id}`);
  }
}
