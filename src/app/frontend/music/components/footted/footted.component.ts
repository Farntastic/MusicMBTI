import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-footted',
  templateUrl: './footted.component.html',
  styleUrls: ['./footted.component.css']
})
export class FoottedComponent implements OnInit {

  currentSong: any = null;

  constructor(private audioService: MusicService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.audioService.currentSong$.subscribe(song => {
      this.currentSong = song;
    });
  }

  getVideoUrl(url: string) {
    const videoId = url.split('v=')[1]?.split('&')[0]; // แยก ID ของวิดีโอ
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  playSong(link: string) {
    this.currentSong = { link }; // ตั้งค่า currentSong ที่นี่
    this.audioService.playSong(this.currentSong); // เรียกใช้บริการเล่นเพลง
  }

  pause() {
    this.audioService.pauseSong();
  }
}
