import { Component, Input } from "@angular/core";

@Component({
  selector: "app-topic-title",
  template: ` <div class="topic-title-container">
    <div class="topic-list-number">{{ topic.number }}</div>
    <div style="flex: 1; text-align:left">
      <h2 class="topic-list-title">DEMO-1 PARENTING</h2>
      <h2 class="topic-list-subtitle">{{ topic.title }}</h2>
    </div>

    <ion-icon class="nav-icon" name="chevron-forward-outline"></ion-icon>
  </div>`,
  styles: [
    `
      .topic-title-container {
        display: flex;
        align-items: center;
      }
      .topic-list-number {
        color: var(--ion-color-tertiary);
        font-size: 80px;
        margin-right: 10px;
      }
      .topic-list-title {
        color: var(--ion-color-secondary);
        font-size: 20px;
        font-weight: bold;
        margin: 0;
      }
      .topic-list-subtitle {
        color: var(--ion-color-tertiary);
        font-size: 20px;
        font-weight: bold;
        margin: 0;
      }
    `,
  ],
})
export class TopicTitleComponent {
  @Input() topic: ITopic;
}

interface ITopic {
  number: number;
  title: string;
}
