import { Component, OnInit } from "@angular/core";
import { TIP_SHEETS } from "../../data/tip-sheets.data";
import { AppTranslateService } from "src/app/modules/translation.module";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class TipSheetsHomePage {
  tipSheets = TIP_SHEETS;
  constructor(private translate: AppTranslateService) {
    this.translate.setTranslationSourceFiles([`tip-sheet-tiles.json`]);
    if (translate.currentLang === "en" || !translate.currentLang) {
      this.tipSheets = TIP_SHEETS;
    } else {
      this.tipSheets = TIP_SHEETS.slice(0, 6);
    }
    translate.onLangChange.subscribe(() => {
      if (translate.currentLang === "en" || !translate.currentLang) {
        this.tipSheets = TIP_SHEETS;
      } else {
        this.tipSheets = TIP_SHEETS.slice(0, 6);
      }
    });
  }
}
