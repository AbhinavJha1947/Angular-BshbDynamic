import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-home-officer-detail',
  templateUrl: './home-officer-detail.component.html',
  styleUrls: ['./home-officer-detail.component.css']
})
export class HomeOfficerDetailComponent implements OnInit {
  officers: any[] = [];
  newOfficer: any = { name: '', designation: '', details: '' };
  editingOfficer: any | null = null;
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private configService: ConfigService) {}

  ngOnInit(): void {
    this.getOfficers();
  }

  getOfficers(): void {
    this.http.get<any[]>(this.configService.officerlist).subscribe(
      (response) => {
        this.officers = response.map(officer => ({
          ...officer,
          photoUrl: officer.photo ? `data:image/jpeg;base64,${officer.photo}` : null
        }));
      },
      (error) => {
        console.error('Error fetching officers:', error);
      }
    );
  }

  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length) {
      this.selectedFile = event.target.files[0];
    }
  }

  addOfficer(): void {
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

      this.http.post<any>(this.configService.officerlist, formData).subscribe(
        (response) => {
          this.officers.push({
            ...response,
            photoUrl: response.photo ? `data:image/jpeg;base64,${response.photo}` : null
          });
          this.newOfficer = { name: '', designation: '', details: '' };
          this.selectedFile = null;
        },
        (error) => {
          console.error('Error adding officer:', error);
        }
      );
    }
  }

  editOfficer(officer: any): void {
    this.editingOfficer = officer;
    this.newOfficer = { ...officer };
  }

  updateOfficer(): void {
    if (this.editingOfficer?.id !== undefined) {
      const formData = new FormData();
      formData.append('Name', this.newOfficer.name);
      formData.append('Designation', this.newOfficer.designation);
      formData.append('Details', this.newOfficer.details);
      if (this.selectedFile) {
        formData.append('Photo', this.selectedFile);
      }

      this.http.put<any>(`${this.configService.officerlist}/${this.editingOfficer.id}`, formData).subscribe(
        (response) => {
          const index = this.officers.findIndex(o => o.id === this.editingOfficer?.id);
          this.officers[index] = {
            ...response,
            photoUrl: response.photo ? `data:image/jpeg;base64,${response.photo}` : null
          };
          this.newOfficer = { name: '', designation: '', details: '' };
          this.selectedFile = null;
          this.editingOfficer = null;
        },
        (error) => {
          console.error('Error updating officer:', error);
        }
      );
    }
  }

  deleteOfficer(id: number | undefined): void {
    if (id !== undefined) {
      this.http.delete(`${this.configService.officerlist}/${id}`).subscribe(
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
