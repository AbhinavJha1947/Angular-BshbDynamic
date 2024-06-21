import { Component, OnInit } from '@angular/core';
import { MdListService } from 'src/app/admin-dashboard/Services/md-list.service';

interface Md {
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
  md: Md = {
    id: undefined,
    name: '',
    fromDate: '',
    toDate: '',
    photo: ''
  };
  isEditMode = false;
  mdList: Md[] = [];

  constructor(private mdListService: MdListService) { }

  ngOnInit(): void {
    this.getMdListItems();
  }

  getMdListItems(): void {
    this.mdListService.getMdListItems().subscribe(data => {
      this.mdList = data;
    });
  }
}
