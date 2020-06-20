import { Component, OnInit } from '@angular/core';
import { ChatMessage, mockMessageGenerator, ChatResponseOption } from './message.model';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages: ChatMessage[] = [];
  responseOptions: ChatResponseOption[] = [];

  botAnimOptions: AnimationOptions = {
    path: '/assets/lottie-animations/Character_Walk_In_2nd_passv6.json',
  };

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
