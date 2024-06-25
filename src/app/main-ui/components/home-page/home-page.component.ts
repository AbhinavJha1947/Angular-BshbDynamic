import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Officer {
  id?: number;
  name: string;
  image: string;
  designation: string;
  details: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  officers: Officer[] = [];
  selectedTab: number = 0; // Default to 'Events' tab

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getOfficers();
  }

  getOfficers() {
    this.http.get<Officer[]>('https://localhost:7169/api/OfficerList').subscribe(
      (response) => {
        this.officers = response.map(officer => {
          if (officer.image) {
            officer.image = 'data:image/jpeg;base64,' + officer.image;
          }
          return officer;
        });
      },
      (error) => {
        console.error('Error fetching officers:', error);
      }
    );
  }

  selectTab(index: number) {
    this.selectedTab = index;
    // Prevent default anchor click behavior which scrolls to top
    return false;
  }
}
