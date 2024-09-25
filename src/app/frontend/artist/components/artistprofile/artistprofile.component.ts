import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../services/artist.service';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-artistprofile',
  templateUrl: './artistprofile.component.html',
  styleUrls: ['./artistprofile.component.css']
})
export class ArtistprofileComponent implements OnInit {
  artistId: string | null = '';
  artist: any = {};
  albums: any[] = [];
  newReleases: any[] = []; // Add actual song data as needed
  currentPage = 1;
  itemsPerPage = 6;
  isLoading: boolean | undefined;
  router: any;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private albumService: AlbumService
  ) {}

  navigateWithDelay(artistId: number) {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/artistprofile', artistId]); // ส่งค่า id ที่เป็นหมายเลข
    }, 2000);
  }
  
  
  
  

  ngOnInit() {
    // Fetch artist ID from the route parameters
    this.artistId = this.route.snapshot.paramMap.get('artistId');
    
    if (this.artistId) {
      const artistIdAsNumber = parseInt(this.artistId); // แปลงค่าเป็น Number
  
      // Fetch artist details by ID
      this.artistService.getArtistById(artistIdAsNumber).subscribe((artistData) => {
        this.artist = artistData;
  
        if (this.artist && this.artist.id) {
          // Fetch albums by artist id
          this.albumService.getAlbumsByArtist(this.artist.id).subscribe((albumData: any[]) => {
            this.albums = albumData;
          });
        }
      });
    }
  }
  
  

  // Pagination logic for new releases
  get paginatedReleases() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.newReleases.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.newReleases.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Scrolling album container
  @ViewChild('albumContainer', { static: false }) albumContainer!: ElementRef;

  scrollRight() {
    this.albumContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  scrollLeft() {
    this.albumContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }
}
