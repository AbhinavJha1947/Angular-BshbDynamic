import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer-hotlink',
  templateUrl: './footer-hotlink.component.html',
  styleUrls: ['./footer-hotlink.component.css']
})
export class FooterHotlinkComponent {
  hotlink = { title: '', url: '' };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('/api/hotlinks', this.hotlink).subscribe(response => {
      console.log('Hot link saved', response);
    });
  }
}
