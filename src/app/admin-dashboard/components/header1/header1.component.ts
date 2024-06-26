import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  url1: string = '';
  img1: File | null = null;
  text1: string = '';
  text2: string = '';
  url2: string = '';
  img2: File | null = null;
  data: any[] = [];
  isEditing: boolean = false;
  editingItemId: number | null = null;

  constructor(private http: HttpClient, private configService: ConfigService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onFileSelected(event: any, imgType: string): void {
    if (imgType === 'img1') {
      this.img1 = event.target.files[0] ?? null;
    } else if (imgType === 'img2') {
      this.img2 = event.target.files[0] ?? null;
    }
  }

  onUpload(): void {
    const formData = new FormData();
    formData.append('url1', this.url1);
    formData.append('text1', this.text1);
    formData.append('text2', this.text2);
    formData.append('url2', this.url2);

    if (this.img1) formData.append('Img1', this.img1, this.img1.name);
    if (this.img2) formData.append('Img2', this.img2, this.img2.name);

    if (this.isEditing && this.editingItemId !== null) {
      this.http.put(`${this.configService.Header1}/${this.editingItemId}`, formData).subscribe(response => {
        console.log(response);
        this.resetForm();
        this.fetchData();
      }, error => {
        console.error(error);
      });
    } else {
      this.http.post(this.configService.Header1, formData).subscribe(response => {
        console.log(response);
        this.resetForm();
        this.fetchData();
      }, error => {
        console.error(error);
      });
    }
  }

  fetchData(): void {
    this.http.get<any[]>(this.configService.Header1).subscribe(response => {
      this.data = response.map(item => ({
        id: item.id,
        url1: item.url1,
        text1: item.text1,
        text2: item.text2,
        url2: item.url2,
        imageUrl1: 'data:image/jpeg;base64,' + item.img1,
        imageUrl2: 'data:image/jpeg;base64,' + item.img2
      }));
    }, error => {
      console.error(error);
    });
  }

  onDelete(itemId: number): void {
    this.http.delete(`${this.configService.Header1}/${itemId}`).subscribe(response => {
      console.log(response);
      this.fetchData();
    }, error => {
      console.error(error);
    });
  }

  onEdit(item: any): void {
    this.isEditing = true;
    this.editingItemId = item.id;
    this.url1 = item.url1;
    this.text1 = item.text1;
    this.text2 = item.text2;
    this.url2 = item.url2;
  }

  resetForm(): void {
    this.isEditing = false;
    this.editingItemId = null;
    this.url1 = '';
    this.img1 = null;
    this.text1 = '';
    this.text2 = '';
    this.url2 = '';
    this.img2 = null;
  }
}
