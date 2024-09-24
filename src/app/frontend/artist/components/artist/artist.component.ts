import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { AlbumService } from '../../services/album.service'; // Import AlbumService
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  showAll = false;
  showAllTopArtists = false;
  isLoading = false;
  artists: any[] = []; // Artists data
  albums: any[] = []; // Albums data

  constructor(
    private artistService: ArtistService, 
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch artists and albums when the component loads
    this.isLoading = true;

    // Fetch artists from the service
    this.artistService.getArtists().subscribe((data) => {
      this.artists = data; // Bind fetched artists data
      this.isLoading = false; // Stop loading indicator when data is fetched
    });

    // Fetch albums from the service
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data; // Bind fetched albums data
    });
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }

  toggleShowAllTopArtists() {
    this.showAllTopArtists = !this.showAllTopArtists;
  }

  navigateWithDelay(artistName: string) {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/artistprofile', artistName]);
    }, 2000);
  }

  onAlbumClick(albumTitle: string) {
    this.router.navigate(['/albumartist', albumTitle]);
  }
}
