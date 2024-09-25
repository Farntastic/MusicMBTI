import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'http://localhost:3000/artist'; // API URL for artists

  constructor(private http: HttpClient) {}

  // Get all artists from the backend
  getArtists(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  // Get artist by ID from the backend
getArtistById(artistId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/id/${artistId}`);
}


  
}
