import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topics",
  templateUrl: "./topics.page.html",
  styleUrls: ["./topics.scss"],
})
export class TopicsPage implements OnInit {
  topics = [
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
  ];

  constructor() {}
  ngOnInit() {}
}
