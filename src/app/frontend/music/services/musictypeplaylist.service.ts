import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusictypeplaylistService {

  constructor(private http: HttpClient) {}

  // ดึงข้อมูลทั้งหมด
  getAllMusictypeplaylist() {  // เปลี่ยนประเภทเป็น Observable<Mbti[]>
    return this.http.get("http://localhost:3000/musicType/all");
  }

  // ฟังก์ชันดึงข้อมูลตาม ID 
  getMusictypeplaylistById(id: number) {
    return this.http.get("http://localhost:3000/musicType/:id");
  }
}
