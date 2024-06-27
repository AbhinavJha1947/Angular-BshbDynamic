import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: any = {}; // Ensure it's an object

  constructor(private http: HttpClient, private configService: ConfigService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any[]>(this.configService.Header1).subscribe(response => {
      console.log('API Response:', response); // Log the entire response to check its structure
      if (response && response.length > 0) {
        const firstItem = response[0]; // Extract the first item from the array
        this.data = {
          url1: firstItem.url1 || '', // Use default values if undefined
          text1: firstItem.text1 || '',
          text2: firstItem.text2 || '',
          url2: firstItem.url2 || '',
          imageUrl1: firstItem.img1 ? 'data:image/png;base64,' + firstItem.img1 : '', // Handle undefined img1
          imageUrl2: firstItem.img2 ? 'data:image/png;base64,' + firstItem.img2 : '' // Handle undefined img2
        };
      }
      console.log('Processed Data:', this.data); // Log the processed data
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
}
