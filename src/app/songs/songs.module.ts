import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SongsPageRoutingModule } from "./songs-routing.module";

import { SongsPage } from "./songs.page";
import { SongService } from "./song.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [SongsPage],
  providers: [SongService],
})
export class SongsPageModule {}
