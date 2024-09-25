import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent implements OnInit{
  playlist: any[] = [];
  API_KEY = 'YOUR_YOUTUBE_API_KEY';
  PLAYLIST_ID = 'YOUR_PLAYLIST_ID';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPlaylistItems();
  }

  getPlaylistItems() {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${this.PLAYLIST_ID}&key=${this.API_KEY}`;
    this.http.get(url).subscribe((data: any) => {
      this.playlist = data.items;
    });
  }
}
