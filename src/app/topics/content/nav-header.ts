import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-topic-header",
  template: `
    <div class="subheader" id="subheader1" style="display:flex">
      <ion-button fill="clear" style="color:white" (click)="back()">
        <ion-icon slot="icon-only" name="arrow-back-outline"></ion-icon>
      </ion-button>
      <div style="flex:1">
        <!-- TODO: Replace with topic title component -->
        <!-- <img [src]="'assets/img/title' + topic + '.png'" class="title-image" /> -->
      </div>
      <ion-button
        fill="clear"
        style="color:white"
        (click)="next()"
        *ngIf="topic < 6"
      >
        <ion-icon slot="icon-only" name="arrow-forward-outline"></ion-icon>
      </ion-button>
      <ion-button
        fill="clear"
        style="color:white"
        (click)="home()"
        *ngIf="topic === 6"
      >
        <ion-icon slot="icon-only" name="home"></ion-icon>
      </ion-button>
    </div>
  `,
})
export class TopicHeaderComponent {
  @Input() topic: number;
  constructor(private router: Router, private location: Location) {}

  next() {
    this.router.navigate(["/topics", this.topic + 1]);
  }
  back() {
    this.location.back();
  }
  home() {
    this.router.navigate(["/"]);
  }
}
