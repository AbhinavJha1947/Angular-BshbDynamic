import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  selectedFile: File | null = null;
  photos: any[] = [];

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
      formData.append('Img', this.selectedFile, this.selectedFile.name); // Updated key name to 'Img'

      this.http.post(this.configService.Banner, formData).subscribe(response => {
        console.log(response);
        this.fetchPhotos();
      }, error => {
        console.error(error);
      });
    }
  }

  fetchPhotos(): void {
    this.http.get<any[]>(this.configService.Banner).subscribe(response => {
      this.photos = response.map(photo => ({
        id: photo.id,
        imageUrl: 'data:image/jpeg;base64,' + photo.photo  
      }));
    }, error => {
      console.error(error);
    });
  }

  onDelete(photoId: number): void {
    this.http.delete(`${this.configService.Banner}/${photoId}`).subscribe(response => {
      console.log(response);
      this.fetchPhotos(); 
    }, error => {
      console.error(error);
    });
  }
}
