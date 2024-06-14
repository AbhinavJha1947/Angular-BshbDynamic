import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/main-ui/data.service';

interface SliderItem {
  img: string;
  alt: string;
  text: string;
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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((result: { sliderArray: SliderItem[] }) => {
      this.sliderArray = result.sliderArray;
      this.setSlideWidth();
      this.startSlider();
    });
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
        this.currentIndex = (this.currentIndex + 1) % this.sliderArray.length;
      }
    }, 5000);
  }

  goToNextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.sliderArray.length;
  }

  goToPrevSlide(): void {
    this.currentIndex = this.currentIndex === 0 ? this.sliderArray.length - 1 : this.currentIndex - 1;
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
