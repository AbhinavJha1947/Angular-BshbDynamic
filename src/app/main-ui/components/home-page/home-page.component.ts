import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Officer {
  id?: number;
  name: string;
  image: string;
  designation: string;
  details: string;
}

interface TenderItem {
  date: number;
  monthYear: string;
  description: string;
}
interface WhatsNewItem {
  description: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  officers: Officer[] = [];

  whatsNewItems: WhatsNewItem[] = [
    { description: "Description of Whats's New 1 goes here - File type (size) DD-MM-YYYY." },
    { description: "Description of Whats's New 2 goes here - File type (size) DD-MM-YYYY." },
    { description: "Description of Whats's New 3 goes here - File type (size) DD-MM-YYYY." },
    { description: "Description of Whats's New 4 goes here - File type (size) DD-MM-YYYY." }
  ];
  tenders: TenderItem[] = [
    { date: 0o1, monthYear: "MM YYYY", description: "Description of Tenders 1 goes here - File type (size)." },
    { date: 0o2, monthYear: "MM YYYY", description: "Description of Tenders 2 goes here - File type (size)." },
    { date: 0o3, monthYear: "MM YYYY", description: "Description of Tenders 3 goes here - File type (size)." }
  ];

  constructor(private http: HttpClient) { 
    console.log('HomePageComponent initialized');
  }

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
}

