import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-language-select",
  template: `<ion-item style="color:white">
    <ion-label
      ><ion-icon name="language-outline" style="font-size:20px"></ion-icon
    ></ion-label>
    <ion-select
      placeholder="Language"
      [(ngModel)]="currentLanguage"
      (ionChange)="languageUpdated()"
    >
      <ion-select-option *ngFor="let l of languages" [value]="l">{{
        l.name
      }}</ion-select-option>
    </ion-select>
  </ion-item>`,
})
export class LanguageSelectComponent {
  currentLanguage: ILanguage;
  languages = LANGUAGES;
  constructor(private translate: TranslateService) {}

  languageUpdated() {
    this.translate.use(this.currentLanguage.code);
  }

  ngOnInit() {
    this.currentLanguage = LANGUAGES.find(
      (l) => l.code === this.translate.currentLang
    );
  }
}
interface ILanguage {
  code: string;
  name: string;
}

const LANGUAGES: ILanguage[] = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "sw",
    name: "Kiswahili",
  },
];
