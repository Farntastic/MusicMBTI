import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusictypeService {

  constructor(private http: HttpClient) {}

  // ดึงข้อมูลทั้งหมด
  getAllMusictype() {  // เปลี่ยนประเภทเป็น Observable<Mbti[]>
    return this.http.get("http://localhost:3000/musicType/all");
  }

  // ฟังก์ชันดึงข้อมูลตาม ID 
  getMusictypeById(id: number) {
    return this.http.get("http://localhost:3000/musicType/:id");
  }

}
