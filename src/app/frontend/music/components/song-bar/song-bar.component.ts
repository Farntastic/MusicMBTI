import { Component } from '@angular/core';

@Component({
  selector: 'app-song-bar',
  templateUrl: './song-bar.component.html',
  styleUrl: './song-bar.component.css'
})
export class SongBarComponent {
  songs = [
    { music: "Music 1"},
    { music: "Music 2"},
    { music: "Music 3"},
    { music: "Music 4"},
    { music: "Music 5"},
    { music: "Music 6"},
    { music: "Music 7"},
    { music: "Music 8"},
    { music: "Music 9"},
    { music: "Music 10"}
  ]
}
