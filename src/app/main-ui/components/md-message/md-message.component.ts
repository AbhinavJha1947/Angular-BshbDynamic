import { Component } from '@angular/core';
import { AboutMdMessageService } from 'src/app/admin-dashboard/Services/about-md-message.service';

interface MdMessage {
  id?: number;
  message: string; 
  createddate?: Date; 
  updateddate?: Date; 
}
@Component({
  selector: 'app-md-message',
  templateUrl: './md-message.component.html',
  styleUrls: ['./md-message.component.css']
})
export class MdMessageComponent {
  messages: MdMessage[] = [];
  newMessage: MdMessage = { message: '' };

  constructor(private mdMessageService: AboutMdMessageService) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.mdMessageService.getMessages().subscribe(
      messages => {
        this.messages = messages;
      },
      error => console.error('Error loading messages', error)
    );
  }
}
