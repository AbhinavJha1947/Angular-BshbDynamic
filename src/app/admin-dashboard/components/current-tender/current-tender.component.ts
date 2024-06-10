import { Component, OnInit } from '@angular/core';
import { CurrentTenderService } from 'src/app/admin-dashboard/Services/current-tender.service';

@Component({
  selector: 'app-current-tender',
  templateUrl: './current-tender.component.html',
  styleUrls: ['./current-tender.component.css']
})
export class CurrentTenderComponent implements OnInit {
  tender = {
    id: '',
    tenderDetails: '',
    publishDate: '',
    lastDateOfsubmission: ''
  };
  isEditMode = false;
  tenders: any[] = [];

  constructor(private currentTenderService: CurrentTenderService) { }

  ngOnInit() {
    this.getCurrentTenders();
  }

  getCurrentTenders() {
    this.currentTenderService.getCurrentTenders().subscribe(data => {
      this.tenders = data;
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.currentTenderService.updateCurrentTenders(this.tender.id, this.tender).subscribe(() => {
        this.getCurrentTenders();
        this.resetForm();
      });
    } else {
      this.currentTenderService.addCurrentTenders(this.tender).subscribe(() => {
        this.getCurrentTenders();
        this.resetForm();
      });
    }
  }

  onEdit(tender: any) {
    this.tender = { ...tender };
    this.isEditMode = true;
  }

  onDelete(id: string) {
    this.currentTenderService.deleteCurrentTenders(id).subscribe(() => {
      this.getCurrentTenders();
    });
  }

  resetForm() {
    this.tender = {
      id: '',
      tenderDetails: '',
      publishDate: '',
      lastDateOfsubmission: ''
    };
    this.isEditMode = false;
  }
}
