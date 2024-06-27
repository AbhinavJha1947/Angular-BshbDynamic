import { Component, OnInit } from '@angular/core';
import { ChairmenListService } from 'src/app/admin-dashboard/Services/chairmen-list.service';
import { ConfigService } from 'src/app/config.service'; 

interface Chairman {
  id?: string;
  name: string;
  from: Date;
  to: Date;
  photo?: string;
}

@Component({
  selector: 'app-chairmen-list',
  templateUrl: './chairmen-list.component.html',
  styleUrls: ['./chairmen-list.component.css']
})
export class ChairmenListComponent implements OnInit {
 
  isEditMode = false;
  chairmen: Chairman = {
    id: '',
    name: '',
    from: new Date(),
    to: new Date(),
    photo: ''
  };
  chairmenList: Chairman[] = []; 

  constructor(private chairmenListService: ChairmenListService, private configService: ConfigService) { }

  ngOnInit() {
    this.getChairmen();
  }

  getChairmen() {
    this.chairmenListService.getChairmen().subscribe(data => {
      this.chairmenList = data; 
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.chairmen.name);
    formData.append('from', this.chairmen.from.toISOString()); 
    formData.append('to', this.chairmen.to.toISOString());   
    if (this.chairmen.photo) {
      formData.append('photo', this.chairmen.photo);
    }

    if (this.isEditMode && this.chairmen.id) {
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

  onEdit(chairman: Chairman) {
    this.chairmen = { ...chairman, from: new Date(chairman.from), to: new Date(chairman.to) };
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
      this.convertFileToBase64(file); 
    }
  }

  convertFileToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.chairmen.photo = reader.result as string; 
    };
  }

  resetForm() {
    this.chairmen = {
      id: '',
      name: '',
      from: new Date(),
      to: new Date(),
      photo: ''
    };
    this.isEditMode = false;
  }
}
