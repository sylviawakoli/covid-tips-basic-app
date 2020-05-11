import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SongsPage } from "./songs.page";
import { SongService } from "./song.service";

const routes: Routes = [
  {
    path: "",
    component: SongsPage,
  },
  {
    path: "song/:id",
    loadChildren: () =>
      import("./song-player/song-player.module").then(
        (m) => m.SongPlayerPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SongService],
})
export class SongsPageRoutingModule {}
