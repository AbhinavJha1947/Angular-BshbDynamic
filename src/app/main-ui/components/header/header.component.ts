import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FocusService } from '../../Services/focus.service'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerImages: any[] = [];
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private http: HttpClient,private focusService: FocusService) {}

  ngOnInit(): void {
    this.getHeaderImages();
  }

  getHeaderImages() {
    this.http.get<any[]>('https://localhost:7169/api/HeaderLogo').subscribe(
      (response) => {
        this.headerImages = response;
      },
      (error) => {
        console.error('Error fetching header images:', error);
      }
    );
  }

  skipToMainContent() {
    console.log("Skip to main content clicked");
    this.focusService.focusMainContent(
      (el, name, value) => {
        console.log(`Setting attribute ${name}=${value} on`, el);
        el.nativeElement.setAttribute(name, value);
      },
      el => {
        console.log("Focusing on", el);
        el.nativeElement.focus();
      }
    );
  }

  getImageSrc(base64String: string | null): string | null {
    if (base64String) {
      return `data:image/jpeg;base64,${base64String}`;
    }
    return null;
  }

  search() {
    if (this.searchQuery.trim() === '') {
      this.searchResults = [];
      return;
    }

    this.http.get<any[]>(`https://localhost:7169/api/Search?query=${this.searchQuery}`).subscribe(
      (response) => {
        this.searchResults = response;
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
}
