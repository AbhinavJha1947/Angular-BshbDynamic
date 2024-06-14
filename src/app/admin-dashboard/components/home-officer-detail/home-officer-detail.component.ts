import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Officer {
  id?: number;
  name: string;
  image: string;
  designation: string;
  details: string;
}

@Component({
  selector: 'app-home-officer-detail',
  templateUrl: './home-officer-detail.component.html',
  styleUrls: ['./home-officer-detail.component.css']
})
export class HomeOfficerDetailComponent implements OnInit {
  officers: Officer[] = [];
  newOfficer: Officer = { name: '', image: '', designation: '', details: '' };
  editingOfficer: Officer | null = null;
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getOfficers();
  }

  getOfficers() {
    this.http.get<Officer[]>('https://localhost:7169/api/OfficerList').subscribe(
      (response) => {
        this.officers = response;
      },
      (error) => {
        console.error('Error fetching officers:', error);
      }
    );
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.selectedFile = event.target.files[0];
    }
  }

  addOfficer() {
    if (this.editingOfficer) {
      this.updateOfficer();
    } else {
      const formData = new FormData();
      formData.append('Name', this.newOfficer.name);
      formData.append('Designation', this.newOfficer.designation);
      formData.append('Details', this.newOfficer.details);
      if (this.selectedFile) {
        formData.append('Photo', this.selectedFile);
      }

      this.http.post<Officer>('https://localhost:7169/api/OfficerList', formData).subscribe(
        (response) => {
          this.officers.push(response);
          this.newOfficer = { name: '', image: '', designation: '', details: '' };
          this.selectedFile = null;
        },
        (error) => {
          console.error('Error adding officer:', error);
        }
      );
    }
  }

  editOfficer(officer: Officer) {
    this.editingOfficer = officer;
    this.newOfficer = { ...officer };
  }

  updateOfficer() {
    if (this.editingOfficer?.id !== undefined) {
      const formData = new FormData();
      formData.append('Name', this.newOfficer.name);
      formData.append('Designation', this.newOfficer.designation);
      formData.append('Details', this.newOfficer.details);
      if (this.selectedFile) {
        formData.append('Photo', this.selectedFile);
      }

      this.http.put<Officer>(`https://localhost:7169/api/OfficerList/${this.editingOfficer.id}`, formData).subscribe(
        (response) => {
          const index = this.officers.findIndex(o => o.id === this.editingOfficer?.id);
          this.officers[index] = response;
          this.newOfficer = { name: '', image: '', designation: '', details: '' };
          this.selectedFile = null;
          this.editingOfficer = null;
        },
        (error) => {
          console.error('Error updating officer:', error);
        }
      );
    }
  }

  deleteOfficer(id: number | undefined) {
    if (id !== undefined) {
      this.http.delete(`https://localhost:7169/api/OfficerList/${id}`).subscribe(
        () => {
          this.officers = this.officers.filter(officer => officer.id !== id);
        },
        (error) => {
          console.error('Error deleting officer:', error);
        }
      );
    }
  }
}
