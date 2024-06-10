import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  videos: Video[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchVideos();
  }

  fetchVideos(): void {
    this.http.get<Video[]>('https://localhost:7210/api/VideoGallery')
      .subscribe(data => {
        this.videos = data;
      });
  }
}
