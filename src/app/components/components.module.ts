import { NgModule } from "@angular/core";

import { InfoSitesDisclaimer } from "./info-sites-disclaimer";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PartnersFooterComponent } from "./partners-footer";

/**
 * Shared and common components used throuhgout the app
 */
const COMMON_COMPONENTS = [InfoSitesDisclaimer, PartnersFooterComponent];

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: COMMON_COMPONENTS,
  declarations: COMMON_COMPONENTS,
})
export class ComponentsModule {}
