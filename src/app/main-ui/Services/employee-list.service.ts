import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Employee {
  id: number;
  name: string;
  department: string;
  designation: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  private apiUrl = 'https://localhost:7169/api/EmployeeList';

  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
