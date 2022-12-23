import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() {}
  conversation = new Subject<Message[]>();
  messageMap:any = {
    "Hi": "Hello",
    "Who are you": "My name is Toshika",
    "What is your role": "Just guide for the user",
    "defaultmsg": "I can't understand your text. Can you please repeat",
    "How are you": "I am doing good, hope same with you :)"
  };
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string){
    let answer:any = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }
}
