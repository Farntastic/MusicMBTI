import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = 'http://localhost:3000/playlist'; // เปลี่ยนไปชี้ไปที่ endpoint ที่เกี่ยวข้องกับเพลง

  constructor(private http: HttpClient) {}

  // ดึงข้อมูลเพลงทั้งหมดจาก backend
  getAllplaylist(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`); // ส่งคำขอ GET ไปยัง backend
  }

  // ฟังก์ชันดึงข้อมูลเพลงตาม ID (ถ้าต้องการ)
  getplaylistById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`); // ดึงข้อมูลเพลงตาม ID
  }

  createPlaylists(name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/createplaylist`,name ); // ส่งข้อมูล ID ไปยัง API
  }
  
}
