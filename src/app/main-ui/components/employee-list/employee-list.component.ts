import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from 'src/app/main-ui/Services/employee-list.service';

interface Employee {
  id: number;
  name: string;
  department: string;
  designation: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] = [];

  constructor(private employeeListService: EmployeeListService) {}

  ngOnInit(): void {
    this.employeeListService.getEmployeeList().subscribe(
      (data: Employee[]) => {
        this.employeeList = data;
      },
      error => {
        console.error('Error fetching employee list', error);
      }
    );
  }
}
