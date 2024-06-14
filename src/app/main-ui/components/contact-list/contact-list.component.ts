import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/main-ui/Services/contact-list.service';

interface Contact {
  id: number;
  name: string;
  department: string;
  designation: string;
  phone: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: Contact[] = [];

  constructor(private contactListService: ContactListService) {}

  ngOnInit(): void {
    this.contactListService.getContactList().subscribe(
      (data: Contact[]) => {
        this.contactList = data;
      },
      error => {
        console.error('Error fetching contact list', error);
      }
    );
  }
}
