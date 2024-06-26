import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';


@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {
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
      formData.append('photo', this.selectedFile, this.selectedFile.name);

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');

      this.http.post(this.configService.PhotoGallery, formData, { headers })
        .subscribe(response => {
          console.log(response);
          this.fetchPhotos();  
        }, error => {
          console.error(error);
        });
    }
  }

  fetchPhotos(): void {
    this.http.get<any[]>(this.configService.PhotoGallery)
      .subscribe(response => {
        this.photos = response.map(photo => ({
          id: photo.id,
          imageUrl: 'data:image/jpeg;base64,' + photo.photo  
        }));
      }, error => {
        console.error(error);
      });
  }

  onDelete(photoId: number): void {
    this.http.delete(`${this.configService.PhotoGallery}/${photoId}`)
      .subscribe(response => {
        console.log(response);
        this.fetchPhotos(); 
      }, error => {
        console.error(error);
      });
  }
}
