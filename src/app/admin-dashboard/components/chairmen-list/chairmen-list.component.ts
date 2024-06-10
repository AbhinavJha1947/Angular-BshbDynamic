import { Component, OnInit } from '@angular/core';
import { ChairmenListService } from 'src/app/admin-dashboard/Services/chairmen-list.service';

@Component({
  selector: 'app-chairmen-list',
  templateUrl: './chairmen-list.component.html',
  styleUrls: ['./chairmen-list.component.css']
})
export class ChairmenListComponent implements OnInit {
  chairmen = {
    id: '',
    name: '',
    from: '',
    to: '',
    photo: null as File | null
  };
  isEditMode = false;
  name: any[] = [];

  constructor(private chairmenListService: ChairmenListService) { }

  ngOnInit() {
    this.getChairmen();
  }

  getChairmen() {
    this.chairmenListService.getChairman().subscribe(data => {
      this.name = data;
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.chairmen.name);
    formData.append('from', this.chairmen.from);
    formData.append('to', this.chairmen.to);
    if (this.chairmen.photo) {
      formData.append('photo', this.chairmen.photo);
    }

    if (this.isEditMode) {
      this.chairmenListService.updateChairman(this.chairmen.id, formData).subscribe(() => {
        this.getChairmen();
        this.resetForm();
      });
    } else {
      this.chairmenListService.addChairman(formData).subscribe(() => {
        this.getChairmen();
        this.resetForm();
      });
    }
  }

  onEdit(chairman: any) {
    this.chairmen = { ...chairman };
    this.isEditMode = true;
  }

  onDelete(id: string) {
    this.chairmenListService.deleteChairman(id).subscribe(() => {
      this.getChairmen();
    });
  }

  onPhotoSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.chairmen.photo = file;
    }
  }

  resetForm() {
    this.chairmen = {
      id: '',
      name: '',
      from: '',
      to: '',
      photo: null
    };
    this.isEditMode = false;
  }
}
