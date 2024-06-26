import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  interval: any;
  sliderArray: any[] = [];
  visibleSlides: any[] = [];
  slideWidth: number = 0;
  isPaused: boolean = false;
  slidesToShow: number = 6;

  constructor(private http: HttpClient, private configService: ConfigService) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.http.get<any[]>(this.configService.carouselfooter).subscribe(response => {
      this.sliderArray = response.map(photo => ({
        id: photo.id,
        imageUrl: 'data:image/jpeg;base64,' + photo.photo,
        url: photo.url
      }));
      this.updateVisibleSlides();
      this.startSlider();
    }, error => {
      console.error(error);
    });
  }

  updateVisibleSlides(): void {
    const start = this.currentIndex;
    const end = this.currentIndex + this.slidesToShow;
    this.visibleSlides = this.sliderArray.slice(start, end);
    if (end > this.sliderArray.length) {
      this.visibleSlides = this.visibleSlides.concat(this.sliderArray.slice(0, end - this.sliderArray.length));
    }
  }

  startSlider(): void {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.goToNextSlide();
      }
    }, 5000);
  }

  goToNextSlide(): void {
    this.currentIndex = (this.currentIndex + this.slidesToShow) % this.sliderArray.length;
    this.updateVisibleSlides();
  }

  goToPrevSlide(): void {
    this.currentIndex = (this.currentIndex - this.slidesToShow + this.sliderArray.length) % this.sliderArray.length;
    this.updateVisibleSlides();
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
