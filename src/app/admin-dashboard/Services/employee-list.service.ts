import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  getEmployee(): Observable<any> {
    return this.http.get(this.configService.EmployeeList);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post(this.configService.EmployeeList, employee);
  }

  updateEmployee(id: string, employee: any): Observable<any> {
    return this.http.put(`${this.configService.EmployeeList}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.configService.EmployeeList}/${id}`);
  }
}
