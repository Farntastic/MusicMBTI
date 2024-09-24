import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist-bar',
  templateUrl: './playlist-bar.component.html',
  styleUrl: './playlist-bar.component.css'
})
export class PlaylistBarComponent {
  playlists = [
    { title: 'Favorite', music: 'Like'},
    { title: 'Playlist 1', music: 'Something'},
    { title: 'Playlist 2', music: 'Jazz Music'},
    { title: 'Playlist 3', music: 'Like'},
    { title: 'Playlist 4', music: 'Something'},
    { title: 'Playlist 5', music: 'Jazz Music'},
    { title: 'Playlist 6', music: 'Like'},
    { title: 'Playlist 7', music: 'Something'},
    { title: 'Playlist 8', music: 'Jazz Music'},
    { title: 'Playlist 9', music: 'Like'},
    { title: 'Playlist 10', music: 'Something'},
    { title: 'Playlist 11', music: 'Jazz Music'},
    { title: 'Playlist 12', music: 'Like'},
    { title: 'Playlist 13', music: 'Something'},
    { title: 'Playlist 14', music: 'Jazz Music'},
    { title: 'Playlist 15', music: 'Like'},
    { title: 'Playlist 16', music: 'Something'},
  ]
}
