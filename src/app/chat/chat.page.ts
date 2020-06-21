import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ChatMessage,
  mockMessageGenerator,
  ChatResponseOption,
  ResponseCustomAction,
} from "./message.model";
import { AnimationOptions } from "ngx-lottie";
import { IonContent } from "@ionic/angular";
import {
  NotificationService,
  IRapidProMessage,
} from "../services/notification.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"],
})
export class ChatPage implements OnInit {
  messages: ChatMessage[] = [];
  responseOptions: ChatResponseOption[] = [];

  backgroundBlobVisible: boolean = false;
  botAnimOptions: AnimationOptions = {
    loop: false,
    path: "/assets/lottie-animations/Walk_In_Entrance_Pass_v2.json",
  };

  constructor(private notificationService: NotificationService) {
    this.notificationService.addMessageHandler(
      "chat-screen",
      this.onReceiveRapidProMessage
    );
  }

  ngOnInit() {
    mockMessageGenerator((msg) => {
      if (
        msg.sender === "user" &&
        msg.responseOptions &&
        msg.responseOptions[0] &&
        msg.responseOptions[0].customAction
      ) {
        this.doCustomResponseAction(msg.responseOptions[0].customAction);
      }
      this.onReceiveMessage(msg);
    });
  }

  onReceiveRapidProMessage(rapidMsg: IRapidProMessage) {
    let chatMsg: ChatMessage = {
      sender: "bot",
      text: rapidMsg.body,
      dateReceived: new Date(),
      dateSent: new Date(),
    };
    this.onReceiveMessage(chatMsg);
  }

  onReceiveMessage(msg: ChatMessage) {
    msg.dateSent = new Date();
    msg.dateReceived = new Date();
    this.messages.push(msg);
    if (msg.sender === "bot") {
      this.backgroundBlobVisible = true;
      setTimeout(() => {
        this.botAnimOptions = {
          path: "assets/lottie-animations/TalkingGesture_Pass_v1.json",
          loop: false,
        };
      });
      setTimeout(() => {
        this.backgroundBlobVisible = false;
      }, 300);
      if (msg.responseOptions) {
        this.responseOptions = msg.responseOptions;
      } else {
        this.responseOptions = [];
      }
    }
  }

  loopCompleted() {
    setTimeout(() => {
      this.backgroundBlobVisible = false;
    }, 1500);
  }

  doCustomResponseAction(action: ResponseCustomAction) {
    if (action === "bot-leave") {
      this.botAnimOptions = {
        loop: false,
        path: "/assets/lottie-animations/Walk_Out_Exit_Pass_v2.json",
      };
    } else if (action === "bot-return") {
      this.botAnimOptions = {
        loop: false,
        path: "/assets/lottie-animations/Run_In_Entrance_Pass_v2.json",
      };
    }
  }

  selectResponseOption(option: ChatResponseOption) {
    console.log("Selected option", option);
    if (option.customAction) {
      this.doCustomResponseAction(option.customAction);
    }
  }
}
