import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-carouselfooter',
  templateUrl: './carouselfooter.component.html',
  styleUrls: ['./carouselfooter.component.css']
})
export class CarouselfooterComponent implements OnInit {
  selectedFile: File | null = null;
  photos: any[] = [];
  url: string = '';

  constructor(private http: HttpClient, private configService: ConfigService) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('photo', this.selectedFile, this.selectedFile.name); // Updated key name to 'photo'
      formData.append('url', this.url);

      this.http.post(this.configService.carouselfooter, formData).subscribe(response => {
        console.log(response);
        this.fetchPhotos();
      }, error => {
        console.error(error);
      });
    }
  }

  fetchPhotos(): void {
    this.http.get<any[]>(this.configService.carouselfooter).subscribe(response => {
      this.photos = response.map(photo => ({
        id: photo.id,
        imageUrl: 'data:image/jpeg;base64,' + photo.photo
      }));
    }, error => {
      console.error(error);
    });
  }

  onDelete(photoId: number): void {
    this.http.delete(`${this.configService.carouselfooter}/${photoId}`).subscribe(response => {
      console.log(response);
      this.fetchPhotos(); 
    }, error => {
      console.error(error);
    });
  }
}
