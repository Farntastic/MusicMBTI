import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Album {
  id: number;
  artist_id: number;
  title: string;
  releaseDate: Date;
  coverImageURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:3000/albums'; // URL ของ API

  constructor(private http: HttpClient) { }

  // ดึงข้อมูลอัลบั้มทั้งหมด
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching albums:', error);
        return throwError(error);
      })
    );
  }
}
