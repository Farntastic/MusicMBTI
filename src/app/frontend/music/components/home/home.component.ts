import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // นำเข้า DomSanitizer

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentSong: any | null = null;

  constructor(private sanitizer: DomSanitizer) {} // ฉีด DomSanitizer

  onSongSelected(song: any) {
    this.currentSong = song;
  }

  getVideoUrl(link: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link); // ใช้ sanitizer เพื่อทำให้ URL ปลอดภัย
  }
}
