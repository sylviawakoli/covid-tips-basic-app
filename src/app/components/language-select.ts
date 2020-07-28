import { Component } from "@angular/core";
import { AppTranslateService } from "../modules/translation.module";

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
  constructor(private translate: AppTranslateService) {}

  languageUpdated() {
    this.translate.use(this.currentLanguage.code);
  }

  ngOnInit() {
    const lang = this.translate.currentLang || this.translate.defaultLang;
    this.currentLanguage = LANGUAGES.find((l) => l.code === lang);
  }
}
interface ILanguage {
  code: string;
  name: string;
}

const LANGUAGES: ILanguage[] = [
  { code: "en", name: "English" },
  { code: "sq", name: "Shqip" },
  { code: "af", name: "Afrikaans" },
  { code: "am", name: "አማርኛ" },
  { code: "ar", name: "العربية" },
  { code: "bn", name: "বাংলা" },
  { code: "da", name: "Dansk" },
  { code: "de", name: "Deutsch" },
  { code: "el", name: "ελληνικά" },
  { code: "et", name: "Eesti" },
  { code: "fa", name: "فارسی" },
  { code: "ga", name: "Gaeilge" },
  { code: "gu", name: "ગુજરાતી" },
  { code: "hi", name: "हिन्दी, हिंदी" },
  { code: "hu", name: "magyar" },
  { code: "hy", name: "Հայերեն" },
  { code: "id", name: "Bahasa Indonesia" },
  { code: "it", name: "Italiano" },
  { code: "ja", name: "日本語 (にほんご)" },
  { code: "ka", name: "ქართული" },
  { code: "mk", name: "македонски јазик" },
  { code: "mn", name: "Монгол хэл" },
  { code: "my", name: "ဗမာစာ" },
  { code: "nr", name: "isiNdebele" },
  { code: "no", name: "Norsk" },
  { code: "ru", name: "русский" },
  { code: "si", name: "සිංහල" },
  { code: "sk", name: "Slovenčina" },
  { code: "sv", name: "Svenska" },
  { code: "ta", name: "தமிழ்" },
  { code: "th", name: "ไทย" },
  { code: "tl", name: "Wikang Tagalog" },
  { code: "tn", name: "Setswana" },
  { code: "uk", name: "Українська" },
  { code: "xh", name: "isiXhosa" },
  { code: "zu", name: "isiZulu" },
  { code: "ms", name: "Bahasa Melayu" },
  { code: "es", name: "Español" },
  { code: "ne", name: "नेपाली" },
  { code: "ro", name: "Română" },
];
