import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatMessage, mockMessageGenerator, ChatResponseOption, ResponseCustomAction } from './message.model';
import { AnimationOptions } from 'ngx-lottie';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages: ChatMessage[] = [];
  responseOptions: ChatResponseOption[] = [];

  botAnimOptions: AnimationOptions = {
    loop: false,
    path: '/assets/lottie-animations/Walk_In_Entrance_Pass_v2.json',
  };

  constructor() { }

  ngOnInit() {
    mockMessageGenerator((msg) => {
      if (msg.sender === "user" && msg.responseOptions && 
        msg.responseOptions[0] && msg.responseOptions[0].customAction) {
          this.doCustomResponseAction(msg.responseOptions[0].customAction);
      }
      this.onReceiveMessage(msg);
    });
  }

  onReceiveMessage(msg: ChatMessage) {
    msg.dateSent = new Date();
    msg.dateReceived = new Date();
    this.messages.push(msg);
    if (msg.sender === "bot") {
      this.botAnimOptions = {
        path: "assets/lottie-animations/TalkingGesture_Pass_v1.json",
        loop: false
      };
      if (msg.responseOptions) {
        this.responseOptions = msg.responseOptions;
      } else {
        this.responseOptions = [];
      }
    }
    
  }

  doCustomResponseAction(action: ResponseCustomAction) {
    if (action === "bot-leave") {
      this.botAnimOptions = {
        loop: false,
        path: '/assets/lottie-animations/Walk_Out_Exit_Pass_v2.json'
      };
    } else if (action === "bot-return") {
      this.botAnimOptions = {
        loop: false,
        path: '/assets/lottie-animations/Run_In_Entrance_Pass_v2.json'
      };
    }
  }

}
