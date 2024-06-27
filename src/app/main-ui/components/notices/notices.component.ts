import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  notices: any[] = [];
  isPaused: boolean = false;
  scrollInterval: any;

  @ViewChild('newsSection') newsSection!: ElementRef;
  @ViewChild('newsCarousel') newsCarousel!: ElementRef;

  constructor(private renderer: Renderer2, private configservice: ConfigService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getNotices();
  }

  getNotices(): void {
    this.http.get<any[]>(this.configservice.Notice).subscribe(
      (response) => {
        this.notices = response;
        this.startScrolling();
      },
      (error) => {
        console.error('Error fetching notices:', error);
      }
    );
  }

  startScrolling(): void {
    this.scrollInterval = setInterval(() => {
      if (!this.isPaused) {
        if (this.newsCarousel.nativeElement.scrollLeft >= this.newsCarousel.nativeElement.scrollWidth - this.newsCarousel.nativeElement.clientWidth) {
          this.newsCarousel.nativeElement.scrollLeft = 0;
        } else {
          this.newsCarousel.nativeElement.scrollLeft += 1;
        }
      }
    }, 20); 
  }

  pauseScrolling(): void {
    clearInterval(this.scrollInterval);
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.pauseScrolling();
    } else {
      this.startScrolling();
    }
  }

  prev(): void {
    this.newsCarousel.nativeElement.scrollLeft -= 100;
  }

  next(): void {
    this.newsCarousel.nativeElement.scrollLeft += 100;
  }
}
