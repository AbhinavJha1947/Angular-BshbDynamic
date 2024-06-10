import { Component, OnInit } from '@angular/core';
import { AboutMdMessageService } from 'src/app/admin-dashboard/Services/about-md-message.service';

interface MdMessage {
  id?: number;
  text: string;
}
@Component({
  selector: 'app-md-message',
  templateUrl: './md-message.component.html',
  styleUrls: ['./md-message.component.css']
})
export class MdMessageComponent  implements OnInit {
  messages: MdMessage[] = [];
  newMessage: MdMessage = { text: '' };

  constructor(private mdMessageService: AboutMdMessageService) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.mdMessageService.getMessages().subscribe(messages => this.messages = messages);
  }

  addMessage() {
    if (this.newMessage.text) {
      this.mdMessageService.addMessage(this.newMessage).subscribe(message => {
        this.messages.push(message);
        this.newMessage = { text: '' };
      });
    }
  }

  editMessage(index: number) {
    const message = this.messages[index];
    this.newMessage = { ...message };
    this.deleteMessageById(message.id!);  // Assuming id is always present
  }

  deleteMessageById(id: number) {
    this.mdMessageService.deleteMessage(id).subscribe(() => {
      this.messages = this.messages.filter(message => message.id !== id);
    });
  }

  deleteMessage(index: number) {
    const id = this.messages[index].id;
    if (id != null) {
      this.deleteMessageById(id);
    } else {
      this.messages.splice(index, 1);
    }
  }
}
