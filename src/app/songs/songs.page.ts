import { Component, OnInit } from "@angular/core";
import { Song } from "./song.model";
import { SongService } from "./song.service";

@Component({
  selector: "plh-songs",
  templateUrl: "./songs.page.html",
  styleUrls: ["./songs.page.scss"],
})
export class SongsPage implements OnInit {
  songList: Song[];

  constructor(songService: SongService) {
    songService.getSongList().subscribe((songs) => {
      this.songList = songs;
    });
  }

  ngOnInit() {}
}
