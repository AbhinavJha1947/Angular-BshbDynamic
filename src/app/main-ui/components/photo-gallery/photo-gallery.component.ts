import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Photo {
  id: number;
  photo: string;
}

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.http.get<Photo[]>('https://localhost:7210/api/PhotoGallery')
      .subscribe(data => {
        this.photos = data;
      });
  }
}
