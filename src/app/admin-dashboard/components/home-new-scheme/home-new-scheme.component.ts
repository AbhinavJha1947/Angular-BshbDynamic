import { Component, OnInit } from '@angular/core';
import { HomeNewschemeService } from 'src/app/admin-dashboard/Services/home-newscheme.service';

interface NewScheme {
  id?: number;
  text: string;
  url: string;
}
@Component({
  selector: 'app-home-new-scheme',
  templateUrl: './home-new-scheme.component.html',
  styleUrls: ['./home-new-scheme.component.css']
})
export class HomeNewSchemeComponent  implements OnInit {
  newSchemes: NewScheme[] = [];
  newScheme: NewScheme = { text: '', url: '' };

  constructor(private newSchemeService: HomeNewschemeService) {}

  ngOnInit() {
    this.loadNewSchemes();
  }

  loadNewSchemes() {
    this.newSchemeService.getNewSchemes().subscribe(schemes => this.newSchemes = schemes);
  }

  addScheme() {
    if (this.newScheme.text && this.newScheme.url) {
      this.newSchemeService.addNewScheme(this.newScheme).subscribe(scheme => {
        this.newSchemes.push(scheme);
        this.newScheme = { text: '', url: '' };
      });
    }
  }

  editScheme(index: number) {
    const scheme = this.newSchemes[index];
    this.newScheme = { ...scheme };
    this.deleteSchemeById(scheme.id!);  
  }

  deleteSchemeById(id: number) {
    this.newSchemeService.deleteNewScheme(id).subscribe(() => {
      this.newSchemes = this.newSchemes.filter(scheme => scheme.id !== id);
    });
  }

  deleteScheme(index: number) {
    const id = this.newSchemes[index].id;
    if (id != null) {
      this.deleteSchemeById(id);
    } else {
      this.newSchemes.splice(index, 1);
    }
  }
}
