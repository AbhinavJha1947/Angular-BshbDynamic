import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  updates: string[] = [
    'Description of Latest Updates 1 goes here.',
    'Description of Latest Updates 2 goes here.',
    'Description of Latest Updates 3 goes here.',
    'Description of Latest Updates 4 goes here.'
  ];
  isPaused: boolean = false;
  scrollInterval: any;

  @ViewChild('newsSection') newsSection!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startScrolling();
  }

  startScrolling(): void {
    this.scrollInterval = setInterval(() => {
      if (!this.isPaused) {
        if (this.newsSection.nativeElement.scrollLeft >= this.newsSection.nativeElement.scrollWidth - this.newsSection.nativeElement.clientWidth) {
          this.newsSection.nativeElement.scrollLeft = 0;
        } else {
          this.newsSection.nativeElement.scrollLeft += 1;
        }
      }
    }, 500); 
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
    this.newsSection.nativeElement.scrollLeft -= 100;
  }

  next(): void {
    this.newsSection.nativeElement.scrollLeft += 100;
  }
}
