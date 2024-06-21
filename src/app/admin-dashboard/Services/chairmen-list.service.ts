import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

interface Chairmen {
  id?: string;
  name: string;
  from: Date;
  to: Date;
  photo: string; 
} 
@Injectable({
  providedIn: 'root'
})
export class ChairmenListService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getChairmen(): Observable<Chairmen[]> {
    return this.http.get<Chairmen[]>(this.configService.Chairman);
  }

  addChairman(chairman: FormData): Observable<any> { 
    return this.http.post(this.configService.Chairman, chairman);
  }
  
  updateChairman(id: string, chairman: FormData): Observable<any> { 
    return this.http.put(`${this.configService.Chairman}/${id}`, chairman); 
  }    

  deleteChairman(id: string): Observable<any> {
    return this.http.delete<any>(`${this.configService.Chairman}/${id}`);
  }
}
