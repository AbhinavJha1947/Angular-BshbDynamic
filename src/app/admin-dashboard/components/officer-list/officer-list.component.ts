import { Component, OnInit } from '@angular/core';
import { OfficerListService } from 'src/app/admin-dashboard/Services/officer-list.service';

interface Officer {
  id?: number;
  name: string;
  designation: string;
  email: string;
  contactNumber: string;
  photo: string;
}

@Component({
  selector: 'app-officer-list',
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.css']
})
export class OfficerListComponent implements OnInit {
  officers: Officer[] = [];
  newOfficer: Officer = { name: '', designation: '', email: '', contactNumber: '', photo: '' };

  constructor(private officerListService: OfficerListService) {}

  ngOnInit() {
    this.loadOfficers();
  }

  loadOfficers() {
    this.officerListService.getOfficers().subscribe(officers => this.officers = officers);
  }

  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newOfficer.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addOfficer() {
    if (this.newOfficer.name && this.newOfficer.designation && this.newOfficer.email && this.newOfficer.contactNumber && this.newOfficer.photo) {
      this.officerListService.addOfficer(this.newOfficer).subscribe(officer => {
        this.officers.push(officer);
        this.newOfficer = { name: '', designation: '', email: '', contactNumber: '', photo: '' };
      });
    }
  }

  editOfficer(index: number) {
    const officer = this.officers[index];
    this.newOfficer = { ...officer };
    this.deleteOfficerById(officer.id!);  // Assuming id is always present
  }

  deleteOfficerById(id: number) {
    this.officerListService.deleteOfficer(id).subscribe(() => {
      this.officers = this.officers.filter(officer => officer.id !== id);
    });
  }

  deleteOfficer(index: number) {
    const id = this.officers[index].id;
    if (id != null) {
      this.deleteOfficerById(id);
    } else {
      this.officers.splice(index, 1);
    }
  }
}
