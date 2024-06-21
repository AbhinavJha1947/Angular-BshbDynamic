import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

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

  constructor(private http: HttpClient, private configService: ConfigService) {
  }
  ngOnInit(): void {
    this.getSubNotices();
  }

  getSubNotices() {
    this.http.get<SubNotice[]>(this.configService.SubNotice).subscribe(
      (response) => {
        this.subNotices = response;
      },
      (error) => {
        console.error('Error fetching sub-notices:', error);
      }
    );
  }
}
