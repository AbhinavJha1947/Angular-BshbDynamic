import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

interface SliderItem {
  img: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  interval: any;
  sliderArray: SliderItem[] = [];
  slideWidth: number = 0;
  isPaused: boolean = false;
  photos: any[] = [];

  constructor(private http: HttpClient, private configService: ConfigService) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.http.get<any[]>(this.configService.Banner).subscribe(response => {
      this.photos = response.map(photo => ({
        id: photo.id,
        img: 'data:image/jpeg;base64,' + photo.photo
      }));
      this.sliderArray = this.photos;
      this.setSlideWidth();
      this.startSlider();
    }, error => {
      console.error(error);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.setSlideWidth();
  }

  setSlideWidth(): void {
    const slideElement = document.querySelector('.slide') as HTMLElement;
    if (slideElement) {
      this.slideWidth = slideElement.clientWidth;
    }
  }

  startSlider(): void {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        if (this.currentIndex === this.sliderArray.length - 1) {
          this.goToFirstSlide();
        } else {
          this.goToNextSlide();
        }
      }
    }, 5000);
  }
  
  goToNextSlide(): void {
    this.currentIndex++;
  }
  
  goToPrevSlide(): void {
    this.currentIndex = this.currentIndex === 0 ? this.sliderArray.length - 1 : this.currentIndex - 1;
  }
  
  goToFirstSlide(): void {
    this.removeTransition();
    this.currentIndex = 0;
    setTimeout(() => {
      this.addTransition();
    }, 50);
  }
  
  removeTransition(): void {
    const slidesElement = document.querySelector('.slides') as HTMLElement;
    if (slidesElement) {
      slidesElement.style.transition = 'none';
    }
  }
  
  addTransition(): void {
    const slidesElement = document.querySelector('.slides') as HTMLElement;
    if (slidesElement) {
      slidesElement.style.transition = 'transform 0.5s ease-in-out';
    }
  }
  
  togglePause(): void {
    this.isPaused = !this.isPaused;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
