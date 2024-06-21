import { Component } from '@angular/core';
import { ChairmenListService } from 'src/app/admin-dashboard/Services/chairmen-list.service';

interface Chairmen {
  id?: string;
  name: string;
  from: Date;
  to: Date;
  photo: string; // Ensure it's of type string
} 

@Component({
  selector: 'app-chairman-list',
  templateUrl: './chairman-list.component.html',
  styleUrls: ['./chairman-list.component.css']
})
export class ChairmanListComponent {
  chairmen: Chairmen = {
    id: '',
    name: '',
    from: new Date(),
    to: new Date(),
    photo: '' 
  };
  isEditMode = false;
  chairmenList: Chairmen[] = []; 
  constructor(private chairmenListService: ChairmenListService) { }

  ngOnInit() {
    this.getChairmen();
  }

  getChairmen() {
    this.chairmenListService.getChairmen().subscribe(data => {
      this.chairmenList = data; 
    });
  }
}
