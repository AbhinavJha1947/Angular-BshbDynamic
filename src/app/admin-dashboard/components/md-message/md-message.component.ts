import { Component, OnInit } from '@angular/core';
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
export class MdMessageComponent implements OnInit {
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

  addMessage() {
    if (this.newMessage.message) {
      this.mdMessageService.addMessage(this.newMessage).subscribe(
        message => {
          this.messages.push(message);
          this.newMessage = { message: '' };
        },
        error => console.error('Error adding message', error)
      );
    }
  }

  editMessage(message: MdMessage) {
    if (message.id !== undefined) {
      console.log('Edit message with ID:', message.id);
    } else {
      console.error('Cannot edit message with undefined ID');
    }
  }

  deleteMessage(message: MdMessage) {
    if (message.id !== undefined) {
      this.mdMessageService.deleteMessage(message.id).subscribe(
        () => {
          this.messages = this.messages.filter(m => m.id !== message.id);
        },
        error => console.error('Error deleting message', error)
      );
    } else {
      console.error('Cannot delete message with undefined ID');
    }
  }
}
