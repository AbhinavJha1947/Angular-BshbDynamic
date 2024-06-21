import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';
 
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
  photos: any[] = [];

  constructor(private http: HttpClient, private configService: ConfigService) { }

  ngOnInit(): void {
    this.fetchPhotos();
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
}
