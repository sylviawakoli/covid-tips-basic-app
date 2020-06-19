import { Component, OnInit } from '@angular/core';
import { ChatMessage, mockMessageGenerator, ChatResponseOption } from './message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages: ChatMessage[] = [];
  responseOptions: ChatResponseOption[] = [];

  constructor() { }

  ngOnInit() {
    mockMessageGenerator((msg) => {
      this.onReceiveMessage(msg);
    });
  }

  onReceiveMessage(msg: ChatMessage) {
    msg.dateSent = new Date();
    msg.dateReceived = new Date();
    this.messages.push(msg);
    if (msg.responseOptions) {
      this.responseOptions = msg.responseOptions;
    } else {
      this.responseOptions = [];
    }
  }

}
