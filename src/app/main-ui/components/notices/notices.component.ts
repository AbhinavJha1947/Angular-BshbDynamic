import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Notice {
  id?: number;
  text: string;
  url: string;
}

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  notices: Notice[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getNotices();
  }

  getNotices() {
    this.http.get<Notice[]>('https://localhost:7169/api/Notice').subscribe(
      (response) => {
        this.notices = response;
      },
      (error) => {
        console.error('Error fetching notices:', error);
      }
    );
  }
}
