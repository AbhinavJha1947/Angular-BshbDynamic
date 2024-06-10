import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerImages: any[] = [];
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private http: HttpClient) {}

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
