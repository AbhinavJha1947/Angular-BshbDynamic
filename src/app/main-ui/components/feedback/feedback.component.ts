import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackData = {
    name: '',
    email: '',
    feedbackText: '',
    captcha: ''
  };
  captchaUrl = 'https://localhost:7169/api/captcha/generate';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshCaptcha();
  }

  onSubmit() {
    this.http.post('https://localhost:7169/api/captcha/validate', { captchaText: this.feedbackData.captcha })
      .subscribe(response => {
        console.log('CAPTCHA validated successfully', response);
        // Proceed with submitting the feedback
        this.submitFeedback();
      }, error => {
        console.error('Invalid CAPTCHA', error);
        // Handle CAPTCHA validation error
      });
  }

  submitFeedback() {
    this.http.post('https://localhost:7169/api/feedback', this.feedbackData)
      .subscribe(response => {
        console.log('Feedback submitted successfully', response);
        // Handle success, show a message to the user
      }, error => {
        console.error('Error submitting feedback', error);
        // Handle error, show an error message to the user
      });
  }

  refreshCaptcha() {
    this.captchaUrl = 'https://localhost:7169/api/captcha/generate?' + Math.random();
  }

  playCaptchaAudio() {
    const audio = new Audio('https://localhost:7169/api/captcha/audio');
    audio.play();
  }
}
