import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('video', this.selectedFile, this.selectedFile.name);

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');

      this.http.post('https://localhost:7210/api/VideoGallery', formData, { headers })
        .subscribe(response => {
          console.log(response);
        }, error => {
          console.error(error);
        });
    }
  }
}
