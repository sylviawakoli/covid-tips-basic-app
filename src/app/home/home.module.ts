import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";
import { ComponentsModule } from "../components/components.module";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { createTranslateLoader } from "../app.module";
import { HttpClient } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    /**
     * Note, ordinarily child components don't require full loader config
     * but however as the language-selector is present here it does
     * https://forum.ionicframework.com/t/ngx-translate-and-lazy-loading-some-languages-not-found/94713/3
     * TODO - move all translate to own module for singular import
     */
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
