import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MBTIService {

  constructor(private http: HttpClient) {}

  // ดึงข้อมูลทั้งหมด
  getAllmbti() {  // เปลี่ยนประเภทเป็น Observable<Mbti[]>
    return this.http.get("http://localhost:3000/mbti/all");
  }

  // ฟังก์ชันดึงข้อมูลตาม ID 
  getmbtiById(id: number) {
    return this.http.get("http://localhost:3000/mbti/:id");
  }
}
