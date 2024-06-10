import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChairmenListService {
  private apiUrl = 'https://localhost:7169/api/Chairman';

  constructor(private http: HttpClient) { }

  getChairman(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addChairman(chairman: FormData) {
    return this.http.post('/api/Chairman', chairman);
  }
  
  updateChairman(id: string, chairman: FormData) {
    return this.http.put(`/api/Chairman/${id}`, chairman);
  }    

  deleteChairman(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
