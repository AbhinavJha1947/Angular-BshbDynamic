import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SubNotice {
  id?: number;
  description: string;
  url: string;
}

@Component({
  selector: 'app-header-subnotice',
  templateUrl: './header-subnotice.component.html',
  styleUrls: ['./header-subnotice.component.css']
})
export class HeaderSubnoticeComponent implements OnInit {
  subNotices: SubNotice[] = [];
  newSubNotice: SubNotice = { description: '', url: '' };
  editingSubNotice: SubNotice | null = null;
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getSubNotices();
  }

  getSubNotices() {
    this.http.get<SubNotice[]>('https://localhost:7169/api/SubNotice').subscribe(
      (response) => {
        this.subNotices = response;
      },
      (error) => {
        console.error('Error fetching sub-notices:', error);
      }
    );
  }

  addSubNotice() {
    if (this.editingSubNotice) {
      this.updateSubNotice();
    } else {
      this.http.post<SubNotice>('https://localhost:7169/api/SubNotice', this.newSubNotice).subscribe(
        (response) => {
          this.subNotices.push(response);
          this.newSubNotice = { description: '', url: '' };
          this.message = 'Sub-Notice added successfully!';
          setTimeout(() => this.message = '', 3000);
        },
        (error) => {
          console.error('Error adding sub-notice:', error);
        }
      );
    }
  }

  editSubNotice(subNotice: SubNotice) {
    this.editingSubNotice = subNotice;
    this.newSubNotice = { ...subNotice };
  }

  updateSubNotice() {
    if (this.editingSubNotice?.id !== undefined) {
      this.http.put<SubNotice>(`https://localhost:7169/api/SubNotice/${this.editingSubNotice.id}`, this.newSubNotice).subscribe(
        (response) => {
          const index = this.subNotices.findIndex(n => n.id === this.editingSubNotice?.id);
          this.subNotices[index] = response;
          this.newSubNotice = { description: '', url: '' };
          this.editingSubNotice = null;
          this.message = 'Sub-Notice updated successfully!';
          setTimeout(() => this.message = '', 3000);
        },
        (error) => {
          console.error('Error updating sub-notice:', error);
        }
      );
    }
  }

  deleteSubNotice(id: number | undefined) {
    if (id !== undefined) {
      this.http.delete(`https://localhost:7169/api/SubNotice/${id}`).subscribe(
        () => {
          this.subNotices = this.subNotices.filter(subNotice => subNotice.id !== id);
          this.message = 'Sub-Notice deleted successfully!';
          setTimeout(() => this.message = '', 3000);
        },
        (error) => {
          console.error('Error deleting sub-notice:', error);
        }
      );
    }
  }
}
