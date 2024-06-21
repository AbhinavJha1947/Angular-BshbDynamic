import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

interface Video {
  id: number;
  video: string;
  videoName: string;
  contentType: string;
}

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {
  videos: any[] = [];

  constructor(private http: HttpClient, private configService: ConfigService) { }

  ngOnInit(): void {
    this.fetchVideos();
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
}
