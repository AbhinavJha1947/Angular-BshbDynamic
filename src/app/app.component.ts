import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FocusService } from './main-ui/Services/focus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-BshbDynamic';
  @ViewChild('mainContent', { static: false }) mainContent!: ElementRef;

  constructor(private renderer: Renderer2, private focusService: FocusService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.focusMainContent();
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.mainContent) {
        console.log("Main content element found:", this.mainContent);
        this.focusService.setMainContent(this.mainContent);
        this.focusMainContent();
      } else {
        console.warn("Main content element not found in AfterViewInit");
      }
    }, 0); // Set timeout to 0 milliseconds
  }

  focusMainContent() {
    this.focusService.focusMainContent(
      (el, name, value) => {
        console.log(`Setting attribute ${name}=${value} on`, el);
        this.renderer.setAttribute(el.nativeElement, name, value);
      },
      el => {
        console.log("Focusing on", el);
        el.nativeElement.focus();
      }
    );
  }
}
