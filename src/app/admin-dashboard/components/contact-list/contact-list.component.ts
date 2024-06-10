import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/admin-dashboard/Services/contact-list.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contact = {
    id: '',
    name: '',
    department: '',
    designation: '',
    phone: ''
  };
  isEditMode = false;
  contacts: any[] = [];

  constructor(private contactListService: ContactListService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactListService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.contactListService.updateContact(this.contact.id, this.contact).subscribe(() => {
        this.getContacts();
        this.resetForm();
      });
    } else {
      this.contactListService.addContact(this.contact).subscribe(() => {
        this.getContacts();
        this.resetForm();
      });
    }
  }

  onEdit(contact: any) {
    this.contact = { ...contact };
    this.isEditMode = true;
  }

  onDelete(id: string) {
    this.contactListService.deleteContact(id).subscribe(() => {
      this.getContacts();
    });
  }

  resetForm() {
    this.contact = {
      id: '',
      name: '',
      department: '',
      designation: '',
      phone: ''
    };
    this.isEditMode = false;
  }
}
