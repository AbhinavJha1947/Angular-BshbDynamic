import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/admin-dashboard/Services/address.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  address: any;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.loadAddress();
  }

  loadAddress() {
    this.addressService.getAddresses().subscribe(data => {
      if (data && data.length) {
        this.address = data[0]; 
      }
    });
  }
}
