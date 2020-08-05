import { Injectable } from "@angular/core";

declare let gtag: Function;

@Injectable({
  providedIn: "root",
})
export class WebAnalyticsService {
  constructor() {}

  public emitAnlayticsEvent(
    eventName: string,
    eventCategory: string = null,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    gtag("event", eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    });
  }
}
