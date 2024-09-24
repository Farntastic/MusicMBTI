import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Artist {
  id: number;
  name: string;
  country: string;
  debutYear: string;
  biography: string;
  photoURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'http://localhost:3000/artists'; // URL ของ API

  constructor(private http: HttpClient) { }

  // ดึงข้อมูลศิลปินทั้งหมด
  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching artists:', error);
        return throwError(error);
      })
    );
  }
}
