import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

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
  
  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.configService.employeeListUrl);
  }
}
