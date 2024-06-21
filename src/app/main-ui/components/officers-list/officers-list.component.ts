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
  selector: 'app-officers-list',
  templateUrl: './officers-list.component.html',
  styleUrls: ['./officers-list.component.css']
})
export class OfficersListComponent implements OnInit {
  officer: Officer = {
    name: '',
    designation: '',
    email: '',
    contactNumber: '',
    photo: ''
  };
  isEditMode = false;
  officerList: Officer[] = [];

  constructor(private officerListService: OfficerListService) { }

  ngOnInit(): void {
    this.getChairmen();
  }

  getChairmen(): void {
    this.officerListService.getOfficers().subscribe(data => {
      this.officerList = data;
    });
  }
}
