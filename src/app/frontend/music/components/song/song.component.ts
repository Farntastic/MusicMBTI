import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { MUSic } from '../../interface/music.interface';
import { MusicService } from '../../services/music.service';
import { MBTIService } from '../../services/mbti.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  music: MUSic[] = [];
  currentSong: MUSic | null = null;
  @Output() songSelected = new EventEmitter<MUSic>();

  constructor(
    private musicService: MusicService,
    private mbtiService: MBTIService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getAllMusic();
  }

  getAllMusic() {
    this.musicService.getAllmusic().subscribe((res: any) => {
      this.music = res.map((item: any) => ({
        id: item.id,
        song_name: item.song_name,
        link: item.link,
        img: item.img,
        mbtiId: item.mbtiId,
        musictypeId: item.musictypeId,
        musicTypePlaylists: item.musicTypePlaylists,
        mbtiPlaylists: item.mbtiPlaylists 
      }));
    });
  }

  playSong(link: string) {
    const selectedSong = this.music.find(song => song.link === link);
    if (selectedSong) {
      this.songSelected.emit(selectedSong); // ส่งข้อมูลเพลงที่เลือกไปยัง parent component
    }
  }

  getVideoUrl(link: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
}
