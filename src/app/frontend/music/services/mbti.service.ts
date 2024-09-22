import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MBTIService {
  private apiUrl = 'http://localhost:3000/mbti'; // เปลี่ยนไปชี้ไปที่ endpoint ที่เกี่ยวข้องกับเพลง

  constructor(private http: HttpClient) {}

  // ดึงข้อมูลเพลงทั้งหมดจาก backend
  getAllmbti(): Observable<any> {
    return this.http.get(this.apiUrl); // ส่งคำขอ GET ไปยัง backend
  }

  // ฟังก์ชันดึงข้อมูลเพลงตาม ID (ถ้าต้องการ)
  getmbtiById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`); // ดึงข้อมูลเพลงตาม ID
  }
}
