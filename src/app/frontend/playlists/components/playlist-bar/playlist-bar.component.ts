import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist-bar',
  templateUrl: './playlist-bar.component.html',
  styleUrl: './playlist-bar.component.css'
})
export class PlaylistBarComponent implements OnInit {

  playlistdetail: any;

  constructor(
    private playlistservice: PlaylistService
){
  
}
ngOnInit(): void {
  this.loadplaylist();
}

    loadplaylist() {
      this.playlistservice.getAllplaylist().subscribe((data) => {
        this.playlistdetail = data;
      })
    }
  

  createPlaylist(name: string) {
    console.log(name);
    this.playlistservice.createPlaylists(name).subscribe((data) => {
      console.log(data);
    });
  }
}
