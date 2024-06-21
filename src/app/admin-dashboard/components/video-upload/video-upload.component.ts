import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {
  selectedFile: File | null = null;
  videos: any[] = [];

  constructor(private http: HttpClient, private configService: ConfigService) { }

  ngOnInit(): void {
    this.fetchVideos();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('video', this.selectedFile, this.selectedFile.name);

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');

      this.http.post(this.configService.VideoGallery, formData, { headers })
        .subscribe(response => {
          console.log(response);
          this.fetchVideos();  
        }, error => {
          console.error(error);
        });
    }
  }

  fetchVideos(): void {
    this.http.get<any[]>(this.configService.VideoGallery)
      .subscribe(response => {
        this.videos = response.map(video => ({
          id: video.id,
          videoUrl: URL.createObjectURL(new Blob([new Uint8Array(video.video)], { type: 'video/mp4' }))
        }));
      }, error => {
        console.error(error);
      });
  }

  
  onDelete(videoId: number): void {
    this.http.delete(`${this.configService.VideoGallery}/${videoId}`)
      .subscribe(response => {
        console.log(response);
        this.fetchVideos();  
      }, error => {
        console.error(error);
      });
  }
}
