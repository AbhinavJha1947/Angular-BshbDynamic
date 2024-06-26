import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-homepage1',
  templateUrl: './homepage1.component.html',
  styleUrls: ['./homepage1.component.css']
})
export class Homepage1Component implements OnInit {
  text: string = '';
  chiefminister: File | null = null;
  departmentminister: File | null = null;
  data: any[] = [];
  isEditing: boolean = false;
  editingItemId: number | null = null;

  constructor(private http: HttpClient, private configService: ConfigService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onFileSelected(event: any, imgType: string): void {
    if (imgType === 'chiefminister') {
      this.chiefminister = event.target.files[0] ?? null;
    } else if (imgType === 'departmentminister') {
      this.departmentminister = event.target.files[0] ?? null;
    }
  }

  onUpload(): void {
    const formData = new FormData();
    formData.append('text', this.text);

    if (this.chiefminister) formData.append('chiefminister', this.chiefminister, this.chiefminister.name);
    if (this.departmentminister) formData.append('departmentminister', this.departmentminister, this.departmentminister.name);

    if (this.isEditing && this.editingItemId !== null) {
      this.http.put(`${this.configService.homepage1}/${this.editingItemId}`, formData).subscribe(response => {
        console.log(response);
        this.resetForm();
        this.fetchData();
      }, error => {
        console.error(error);
      });
    } else {
      this.http.post(this.configService.homepage1, formData).subscribe(response => {
        console.log(response);
        this.resetForm();
        this.fetchData();
      }, error => {
        console.error(error);
      });
    }
  }

  fetchData(): void {
    this.http.get<any[]>(this.configService.homepage1).subscribe(response => {
      this.data = response.map(item => ({
        id: item.id,
        text: item.text,
        chiefministerImageUrl: 'data:image/jpeg;base64,' + item.chiefminister,
        departmentministerImageUrl: 'data:image/jpeg;base64,' + item.departmentminister
      }));
    }, error => {
      console.error(error);
    });
  }

  onDelete(itemId: number): void {
    this.http.delete(`${this.configService.homepage1}/${itemId}`).subscribe(response => {
      console.log(response);
      this.fetchData();
    }, error => {
      console.error(error);
    });
  }

  onEdit(item: any): void {
    this.isEditing = true;
    this.editingItemId = item.id;
    this.text = item.text;
  }

  resetForm(): void {
    this.isEditing = false;
    this.editingItemId = null;
    this.text = '';
    this.chiefminister = null;
    this.departmentminister = null;
  }
}
