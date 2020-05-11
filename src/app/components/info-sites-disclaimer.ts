import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-info-sites-disclaimer",
  template: `<div class="magenta-bg">
    <p style="font-size: 1.5em; flex-direction: column;">
      <span style="color:var(--ion-color-tertiary)"
        >There are a lot of stories going around.</span
      >
      <br />
      Some may not be true. Use trustworthy sites:
      <br /><br />
      <a
        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
      >
        WHO Covid 19 Advice
      </a>
      and
      <a href="https://www.unicef.org/coronavirus/covid-19">
        UNICEF Covid 19 Advice
      </a>
    </p>
  </div>`,
})
export class InfoSitesDisclaimer implements OnInit {
  constructor() {}

  ngOnInit() {}
}
