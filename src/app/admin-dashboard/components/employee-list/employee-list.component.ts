import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from 'src/app/admin-dashboard/Services/employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee = {
    id: '',
    name: '',
    department: '',
    designation: '',
  };
  isEditMode = false;
  employees: any[] = [];

  constructor(private employeeListService: EmployeeListService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeListService.getEmployee().subscribe(data => {
      this.employees = data;
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.employeeListService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
        this.getEmployees();
        this.resetForm();
      });
    } else {
      this.employeeListService.addEmployee(this.employee).subscribe(() => {
        this.getEmployees();
        this.resetForm();
      });
    }
  }

  onEdit(employee: any) {
    this.employee = { ...employee };
    this.isEditMode = true;
  }

  onDelete(id: string) {
    this.employeeListService.deleteEmployee(id).subscribe(() => {
      this.getEmployees();
    });
  }

  resetForm() {
    this.employee = {
      id: '',
      name: '',
      department: '',
      designation: ''
    };
    this.isEditMode = false;
  }
}
