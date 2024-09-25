import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private apiUrl = 'http://localhost:3000/login/'; // URL ของ API สำหรับเข้าสู่ระบบ
  constructor(private http: HttpClient) { }

  login(usernameOrEmail: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { usernameOrEmail, password }).pipe(
      catchError(this.handleError) // จัดการข้อผิดพลาด
    );
  }

  // ฟังก์ชันสำหรับจัดการข้อผิดพลาด
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // ข้อผิดพลาดจากฝั่งไคลเอนต์
      console.error('An error occurred:', error.error.message);
    } else {
      // ข้อผิดพลาดจากเซิร์ฟเวอร์
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // ส่งคืน observable ที่มีข้อผิดพลาด
    return throwError('Something bad happened; please try again later.');
  }
}
