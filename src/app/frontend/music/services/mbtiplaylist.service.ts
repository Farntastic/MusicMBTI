import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MbtiplaylistService {

  constructor(private http: HttpClient) {}

  // ดึงข้อมูลทั้งหมด
  getAllMbtiplaylist() {  // เปลี่ยนประเภทเป็น Observable<Mbti[]>
    return this.http.get("http://localhost:3000/mbtiPlaylist/all");
  }

  // ฟังก์ชันดึงข้อมูลตาม ID 
  getMbtiplaylistById(id: number) {
    return this.http.get("http://localhost:3000/mbtiPlaylist/:id");
  }
}