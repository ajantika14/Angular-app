import { Message, ChatService } from './../chat.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: Message[] = [];
  value: string;
  constructor(public chatService: ChatService) { }
  ngOnInit() {
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }
  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }
}
