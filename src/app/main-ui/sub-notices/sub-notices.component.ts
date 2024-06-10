import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SubNotice {
  id?: number;
  description: string;
  url: string;
}

@Component({
  selector: 'app-sub-notices',
  templateUrl: './sub-notices.component.html',
  styleUrls: ['./sub-notices.component.css']
})
export class SubNoticesComponent implements OnInit {
  subNotices: SubNotice[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getSubNotices();
  }

  getSubNotices() {
    this.http.get<SubNotice[]>('https://localhost:7169/api/SubNotice').subscribe(
      (response) => {
        this.subNotices = response;
      },
      (error) => {
        console.error('Error fetching sub-notices:', error);
      }
    );
  }
}
