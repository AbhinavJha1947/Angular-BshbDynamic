import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getFeedback(): Observable<any[]> {
    return this.http.get<any[]>(this.configService.Feedback);
  }
}
