import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/admin-dashboard/Services/feedback.service';

interface Feedback {
  id: number;
  feedbackText: string;
  email: string;
  name: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackList: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.feedbackService.getFeedback().subscribe(
      (data: Feedback[]) => {
        this.feedbackList = data;
      },
      error => {
        console.error('Error fetching feedback', error);
      }
    );
  }
}
