import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

interface Feedback {
  id: number;
  feedbackText: string;
  email: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.configService.Feedback);
  }
}
