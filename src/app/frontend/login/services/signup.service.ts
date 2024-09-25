import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private apiUrl = 'http://localhost:3000/login/'; // เปลี่ยนเป็น URL ของคุณ

  constructor(private http: HttpClient) {}

  // ฟังก์ชันสำหรับลงทะเบียนผู้ใช้ใหม่
  register(userData: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}