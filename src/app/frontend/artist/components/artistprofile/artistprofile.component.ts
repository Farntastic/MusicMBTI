import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artistprofile',
  templateUrl: './artistprofile.component.html',
  styleUrls: ['./artistprofile.component.css']
})
export class ArtistprofileComponent implements OnInit {
  artistName: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // ดึงชื่อศิลปินจากพารามิเตอร์ใน URL
    this.artistName = this.route.snapshot.paramMap.get('artistName');
  }

  // Array of songs for new releases
  newReleases = [
    { title: 'Lost in the Fire (feat. The Weeknd)', album: 'Hyperion', duration: '3:22', plays: '18,481,378' },
    { title: 'Starboy - Daft Punk', album: 'Starboy', duration: '3:58', plays: '1,095,942,291' },
    { title: 'Call Out My Name', album: 'My Dear Melancholy,', duration: '3:48', plays: '346,432,291' },
    { title: 'The Hills', album: 'Beauty Behind the Madness', duration: '4:02', plays: '779,452,400' },
    { title: 'Pray for Me (with Kendrick Lamar)', album: 'Black Panther', duration: '3:31', plays: '311,321,948' },
    { title: 'Blinding Lights', album: 'After Hours', duration: '3:20', plays: '2,540,000,000' },
    { title: 'In Your Eyes', album: 'After Hours', duration: '3:58', plays: '540,321,948' },
    // Add more songs here if needed
  ];

  // Pagination variables for New Releases
  currentPage = 1;
  itemsPerPage = 6;

  // Method to get current page items for New Releases
  get paginatedReleases() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.newReleases.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Method to go to the next page for New Releases
  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.newReleases.length) {
      this.currentPage++;
    }
  }

  // Method to go to the previous page for New Releases
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Array of albums
  albums = [
    { name: 'Starboy', image: 'https://www.slugmag.com/wp/wp-content/uploads/2024/05/The-Anthology_Cover.webp' },
    { name: 'Beauty Behind the Madness', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/The_Weeknd_-_Beauty_Behind_the_Madness.png/220px-The_Weeknd_-_Beauty_Behind_the_Madness.png' },
    { name: 'Trilogy', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/The_Weeknd_-_Trilogy.png/220px-The_Weeknd_-_Trilogy.png' },
    { name: 'My Dear Melancholy', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/The_Weeknd_-_My_Dear_Melancholy%2C.png/220px-The_Weeknd_-_My_Dear_Melancholy%2C.png' },
    { name: 'After Hours', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/da/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png' },
    { name: 'Dawn FM', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/The_Weeknd_-_Dawn_FM.png/220px-The_Weeknd_-_Dawn_FM.png' },
    { name: 'Starboy', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/The_Weeknd_-_Starboy.png/220px-The_Weeknd_-_Starboy.png' },
    { name: 'Beauty Behind the Madness', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/The_Weeknd_-_Beauty_Behind_the_Madness.png/220px-The_Weeknd_-_Beauty_Behind_the_Madness.png' },
    { name: 'Trilogy', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/The_Weeknd_-_Trilogy.png/220px-The_Weeknd_-_Trilogy.png' },
    { name: 'My Dear Melancholy', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/The_Weeknd_-_My_Dear_Melancholy%2C.png/220px-The_Weeknd_-_My_Dear_Melancholy%2C.png' },
    { name: 'After Hours', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/da/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png' },
    { name: 'Dawn FM', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/The_Weeknd_-_Dawn_FM.png/220px-The_Weeknd_-_Dawn_FM.png' },
    // Add more albums here
  ];

  // Reference to the album container
  @ViewChild('albumContainer', { static: false }) albumContainer!: ElementRef;

  // Method to scroll the album container to the right
  scrollRight() {
    this.albumContainer.nativeElement.scrollBy({
      left: 300,  // Adjust the scroll distance to display 4 albums at once
      behavior: 'smooth'
    });
  }

  // Method to scroll the album container to the left
  scrollLeft() {
    this.albumContainer.nativeElement.scrollBy({
      left: -300,  // Adjust the scroll distance to display 4 albums at once
      behavior: 'smooth'
    });
  }
}
