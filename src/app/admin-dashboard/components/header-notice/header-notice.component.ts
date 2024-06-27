import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';
interface Notice {
  id?: number;
  text: string;
  url: string;
}

@Component({
  selector: 'app-header-notice',
  templateUrl: './header-notice.component.html',
  styleUrls: ['./header-notice.component.css']
})
export class HeaderNoticeComponent implements OnInit {
  notices: Notice[] = [];
  newNotice: Notice = { text: '', url: '' };
  editingNotice: Notice | null = null;
  message: string = '';

  constructor(private http: HttpClient, private configservice : ConfigService) {}

  ngOnInit(): void {
    this.getNotices();
  }

  getNotices() {
    this.http.get<any>(this.configservice.Notice).subscribe(
      (response) => {
        this.notices = response;
      },
      (error) => {
        console.error('Error fetching notices:', error);
      }
    );
  }

  addNotice() {
    if (this.editingNotice) {
      this.updateNotice();
      this.getNotices();
    } else {
      this.http.post<any>(this.configservice.Notice, this.newNotice).subscribe(
        (response) => {
          this.notices.push(response);
          this.newNotice = { text: '', url: '' };
          this.message = 'Notice added successfully';
          setTimeout(() => this.message = '', 3000);
        },
        (error) => {
          console.error('Error adding notice:', error);
        }
      );
    }
  }

  editNotice(notice: Notice) {
    this.editingNotice = notice;
    this.newNotice = { ...notice };
  }

  updateNotice() {
    if (this.editingNotice?.id !== undefined) {
      this.http.put<any>(`${this.configservice.Notice}/${this.editingNotice.id}`, this.newNotice).subscribe(
        (response) => {
          const index = this.notices.findIndex(n => n.id === this.editingNotice?.id);
          this.notices[index] = response;
          this.newNotice = { text: '', url: '' };
          this.editingNotice = null;
          this.message = 'Notice updated successfully';
          setTimeout(() => this.message = '', 3000);
        },
        (error) => {
          console.error('Error updating notice:', error);
        }
      );
    }
  }

  deleteNotice(id: number | undefined) {
    if (id !== undefined) {
      this.http.delete(`${this.configservice.Notice}/${id}`).subscribe(
        () => {
          this.notices = this.notices.filter(notice => notice.id !== id);
          this.message = 'Notice deleted successfully';
          setTimeout(() => this.message = '', 3000);
        },
        (error) => {
          console.error('Error deleting notice:', error);
        }
      );
    }
  }
}
