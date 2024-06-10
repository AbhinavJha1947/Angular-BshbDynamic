import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer-map',
  templateUrl: './footer-map.component.html',
  styleUrls: ['./footer-map.component.css']
})
export class FooterMapComponent {
  map = { url: ''};

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('/api/maps', this.map).subscribe(response => {
      console.log('Map saved', response);
    });
  }
}

