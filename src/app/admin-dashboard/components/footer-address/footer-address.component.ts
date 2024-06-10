import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/admin-dashboard/Services/address.service';
@Component({
  selector: 'app-footer-address',
  templateUrl: './footer-address.component.html',
  styleUrls: ['./footer-address.component.css']
})
export class FooterAddressComponent implements OnInit {
  address = {
    id: '',
    registeredOffice: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    email: ''
  };
  addresses: any[] = [];
  isEditMode = false;

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {
    this.addressService.getAddresses().subscribe(data => {
      this.addresses = data;
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.addressService.updateAddress(this.address).subscribe(() => {
        this.getAddresses();
        this.resetForm();
      });
    } else {
      this.addressService.addAddress(this.address).subscribe(() => {
        this.getAddresses();
        this.resetForm();
      });
    }
  }

  onEdit(address: any) {
    this.address = { ...address };
    this.isEditMode = true;
  }

  onDelete(id: string) {
    this.addressService.deleteAddress(id).subscribe(() => {
      this.getAddresses();
    });
  }

  resetForm() {
    this.address = {
      id: '',
      registeredOffice: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: '',
      email: ''
    };
    this.isEditMode = false;
  }
}
