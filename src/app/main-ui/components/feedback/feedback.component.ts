import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

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
  captchaUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.captchaUrl = this.configService.captchaGenerateUrl;
  }

  ngOnInit() {
    this.refreshCaptcha();
  }

  onSubmit() {
    this.http.post(this.configService.captchaValidateUrl, { captchaText: this.feedbackData.captcha })
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
    this.http.post(this.configService.feedbackUrl, this.feedbackData)
      .subscribe(response => {
        console.log('Feedback submitted successfully', response);
        // Handle success, show a message to the user
      }, error => {
        console.error('Error submitting feedback', error);
        // Handle error, show an error message to the user
      });
  }

  refreshCaptcha() {
    this.captchaUrl = `${this.configService.captchaGenerateUrl}?${Math.random()}`;
  }

  playCaptchaAudio() {
    const audio = new Audio(this.configService.captchaAudioUrl);
    audio.play();
  }
}
