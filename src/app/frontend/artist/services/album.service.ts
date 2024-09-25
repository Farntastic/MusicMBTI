import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:3000/album'; // API URL for albums

  constructor(private http: HttpClient) {}

  // Get all albums from the backend
  getAlbums(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  // Get albums by artist ID from the backend
  getAlbumsByArtist(artistId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/artist/${artistId}`);
  }
}
