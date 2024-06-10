import { Component, OnInit } from '@angular/core';
import { MdListService } from 'src/app/admin-dashboard/Services/md-list.service';

interface MdListItem {
  id?: number;
  name: string;
  fromDate: string;
  toDate: string;
  photo: string;
}

@Component({
  selector: 'app-md-list',
  templateUrl: './md-list.component.html',
  styleUrls: ['./md-list.component.css']
})
export class MdListComponent implements OnInit {
  mdListItems: MdListItem[] = [];
  newMdListItem: MdListItem = { name: '', fromDate: '', toDate: '', photo: '' };

  constructor(private mdListService: MdListService) {}

  ngOnInit() {
    this.loadMdListItems();
  }

  loadMdListItems() {
    this.mdListService.getMdListItems().subscribe(items => this.mdListItems = items);
  }

  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newMdListItem.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addMdListItem() {
    if (this.newMdListItem.name && this.newMdListItem.fromDate && this.newMdListItem.toDate && this.newMdListItem.photo) {
      this.mdListService.addMdListItem(this.newMdListItem).subscribe(item => {
        this.mdListItems.push(item);
        this.newMdListItem = { name: '', fromDate: '', toDate: '', photo: '' };
      });
    }
  }

  editMdListItem(index: number) {
    const item = this.mdListItems[index];
    this.newMdListItem = { ...item };
    this.deleteMdListItemById(item.id!);  // Assuming id is always present
  }

  deleteMdListItemById(id: number) {
    this.mdListService.deleteMdListItem(id).subscribe(() => {
      this.mdListItems = this.mdListItems.filter(item => item.id !== id);
    });
  }

  deleteMdListItem(index: number) {
    const id = this.mdListItems[index].id;
    if (id != null) {
      this.deleteMdListItemById(id);
    } else {
      this.mdListItems.splice(index, 1);
    }
  }
}
