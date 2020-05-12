import { NgModule } from "@angular/core";

import { InfoSitesDisclaimer } from "./info-sites-disclaimer";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PartnersFooterComponent } from "./partners-footer";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { LanguageSelectComponent } from "./language-select";
import { IonicModule } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { createTranslateLoader } from "../app.module";

/**
 * Shared and common components used throuhgout the app
 */
const COMMON_COMPONENTS = [
  InfoSitesDisclaimer,
  PartnersFooterComponent,
  LanguageSelectComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: COMMON_COMPONENTS,
  declarations: COMMON_COMPONENTS,
})
export class ComponentsModule {}
