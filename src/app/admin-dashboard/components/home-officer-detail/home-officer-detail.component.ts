import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
export class HomeOfficerDetailComponent  implements OnInit {
  officers: Officer[] = [];
  newOfficer: Officer = { name: '', image: '', designation: '', details: '' };
  editingOfficer: Officer | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getOfficers();
  }

  getOfficers() {
    this.http.get<Officer[]>('https://localhost:7169/api/officerdetails').subscribe(
      (response) => {
        this.officers = response;
      },
      (error) => {
        console.error('Error fetching officers:', error);
      }
    );
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newOfficer.image = reader.result as string;
      };
    }
  }

  addOfficer() {
    if (this.editingOfficer) {
      this.updateOfficer();
    } else {
      this.http.post<Officer>('https://localhost:7169/api/officerdetails', this.newOfficer).subscribe(
        (response) => {
          this.officers.push(response);
          this.newOfficer = { name: '', image: '', designation: '', details: '' };
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
      this.http.put<Officer>(`https://localhost:7169/api/officerdetails/${this.editingOfficer.id}`, this.newOfficer).subscribe(
        (response) => {
          const index = this.officers.findIndex(o => o.id === this.editingOfficer?.id);
          this.officers[index] = response;
          this.newOfficer = { name: '', image: '', designation: '', details: '' };
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
      this.http.delete(`https://localhost:7169/api/officerdetails/${id}`).subscribe(
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

