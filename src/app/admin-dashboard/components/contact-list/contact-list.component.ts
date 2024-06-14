import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactListService } from 'src/app/admin-dashboard/Services/contact-list.service';

interface Contact {
  id?: string;
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
  contact: Contact = {
    name: '',
    department: '',
    designation: '',
    phone: ''
  };
  isEditMode = false;
  contacts: Contact[] = [];
  errorMessage: string = '';

  constructor(private contactListService: ContactListService) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactListService.getContacts().subscribe(data => {
      this.contacts = data;
    }, error => {
      this.errorMessage = 'Error fetching contacts';
      console.error(error);
    });
  }

  onSubmit(contactForm: NgForm) {
    this.errorMessage = '';
    console.log('Form submitted', this.contact);
    if (this.isEditMode) {
      this.contactListService.updateContact(this.contact.id!, this.contact).subscribe(() => {
        console.log('Contact updated', this.contact);
        this.getContacts();
        this.resetForm(contactForm);
      }, error => {
        this.errorMessage = 'Error updating contact';
        console.error('Error updating contact', error);
      });
    } else {
      const newContact = { ...this.contact }; // Create a copy of the contact
      delete newContact.id; // Remove the id property

      this.contactListService.addContact(newContact).subscribe(() => {
        console.log('Contact added', this.contact);
        this.getContacts();
        this.resetForm(contactForm);
      }, error => {
        this.errorMessage = 'Error adding contact';
        console.error('Error adding contact', error);

        // Log error details
        if (error.error) {
          console.error('Error details:', error.error);
        }
      });
    }
  }

  onEdit(contact: Contact) {
    this.contact = { ...contact };
    this.isEditMode = true;
  }

  onDelete(id: string) {
    this.errorMessage = '';
    this.contactListService.deleteContact(id).subscribe(() => {
      console.log('Contact deleted', id);
      this.getContacts();
    }, error => {
      this.errorMessage = 'Error deleting contact';
      console.error(error);
    });
  }

  resetForm(contactForm: NgForm) {
    contactForm.resetForm();
    this.contact = {
      name: '',
      department: '',
      designation: '',
      phone: ''
    };
    this.isEditMode = false;
  }
}
