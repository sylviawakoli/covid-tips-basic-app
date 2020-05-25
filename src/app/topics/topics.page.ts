import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-topics",
  templateUrl: "./topics.page.html",
  styleUrls: ["./topics.scss"],
})
export class TopicsPage implements OnInit {
  topics = TOPICS;
  // note - options passed to swiper api: https://swiperjs.com/api/
  slideOptions: IonSlides["options"] = {
    autoHeight: true,
  };
  @ViewChild("slides", { static: true }) slides: IonSlides;

  constructor() {}
  ngOnInit() {}

  slideTo(index: number) {
    this.slides.slideTo(index);
  }

  slideDidChange() {}
}

const TOPICS = [
  {
    title: "One-on-One Time",
    number: 1,
  },
  {
    title: "Keeping It Positive",
    number: 2,
  },
  {
    title: "Structure Up",
    number: 3,
  },
  {
    title: "Bad Behavior",
    number: 4,
  },
  {
    title: "Keep Calm and Manage Stress",
    number: 5,
  },
  {
    title: "Talking about Demo-1-19",
    number: 6,
  },
  {
    title: "Tips for Children with Disabilities",
    number: 7,
  },
  {
    title: "topic 8",
    number: 8,
  },

  {
    title: "topic 9",
    number: 9,
  },
  {
    title: "topic 10",
    number: 10,
  },
  {
    title: "topic 11",
    number: 11,
  },

  {
    title: "topic 12",
    number: 12,
  },
  {
    title: "topic 13",
    number: 13,
  },
  {
    title: "topic 14",
    number: 14,
  },
];
