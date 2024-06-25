import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FocusService {
  private mainContent: ElementRef | null = null;

  setMainContent(element: ElementRef) {
    this.mainContent = element;
    console.log("Main content set in service:", element);
  }

  focusMainContent(setAttributeFn: (el: ElementRef, name: string, value: string) => void, focusFn: (el: ElementRef) => void) {
    if (this.mainContent) {
      console.log("Focusing main content element:", this.mainContent);
      setAttributeFn(this.mainContent, 'tabindex', '-1');
      focusFn(this.mainContent);
    } else {
      console.error("Main content element is not set");
    }
  }
}
