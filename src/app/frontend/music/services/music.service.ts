import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private audioPlayer: HTMLAudioElement | null = null; // ใช้ HTMLAudioElement

  constructor(private http: HttpClient) {
    if (typeof window !== 'undefined') {
      // สร้าง audioPlayer เฉพาะเมื่ออยู่ในเบราว์เซอร์
      this.audioPlayer = new Audio();
    }
  }

  // ดึงข้อมูลทั้งหมด
  getAllmusic() {
    return this.http.get("http://localhost:3000/music/all");
  }
 // ฟังก์ชันดึงข้อมูลตาม ID 
 getmusicById(id: number) {
  return this.http.get(`http://localhost:3000/music/${id}`);
}

  private currentSongSubject = new BehaviorSubject<any>(null);
  currentSong$ = this.currentSongSubject.asObservable();

  // ฟังก์ชันเล่นเพลง
  playSong(song: any) {
    if (this.audioPlayer) { // ตรวจสอบว่า audioPlayer มีค่าหรือไม่
      this.currentSongSubject.next(song); // อัปเดตสถานะเพลง
      this.audioPlayer.src = song.link;   // ตั้งค่าลิงก์ของเพลง
      this.audioPlayer.play();            // เล่นเพลง
    }
  }

  // ฟังก์ชันหยุดเพลง
  pauseSong() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
    }
  }
}
