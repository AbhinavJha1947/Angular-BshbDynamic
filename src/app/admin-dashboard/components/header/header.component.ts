import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logos = [
    { url: '', file: null }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.logos[index].file = file;
    }
  }

  addLogo() {
    if (this.logos.length < 9) {
      this.logos.push({ url: '', file: null });
    }
  }

  removeLogo(index: number) {
    this.logos.splice(index, 1);
  }

  onSubmit() {
    const formData = new FormData();

    this.logos.forEach((logo, index) => {
      if (logo.url) {
        formData.append(`url${index + 1}`, logo.url);
      }
      if (logo.file) {
        formData.append(`Img${index + 1}`, logo.file);
      }
    });

    this.http.post('https://localhost:7169/api/HeaderLogo', formData).subscribe(response => {
      console.log('Form submitted successfully', response);
      alert('Form submitted successfully');

    }, error => {
      console.error('Error submitting form', error);
      alert('Error submitting form');
    });
  }
}
