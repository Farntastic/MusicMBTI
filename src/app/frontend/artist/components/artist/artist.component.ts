import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
  // Toggle variables สำหรับควบคุมการแสดงผลของ Top Artists และ Popular Artists
  showAll = false;
  showAllTopArtists = false;
  isLoading = false; // ตัวแปรสำหรับควบคุมการแสดงผลหน้าโหลด

  // Inject Router เพื่อให้สามารถใช้ในการเปลี่ยนหน้าได้
  constructor(private router: Router) {}  // Inject Router ใน constructor

  // Array ของ Top Artists
  topArtists = [
    {
      name: 'Beyoncé',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Beyonce_-_2019.jpg',
    },
    {
      name: 'Ed Sheeran',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Ed_Sheeran_2013.jpg',
    },
    {
      name: 'The Weeknd',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/56/The_Weeknd_2018.jpg',
    },
    {
      name: 'Adele',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Adele_2016.jpg',
    },
    {
      name: 'Taylor Swift',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Taylor_Swift_3_-_2019_by_Glenn_Francis.jpg',
    }
  ];

  // Array ของ Popular Artists
  cards = [
    {
      title: 'Short n Sweet',
      artist: 'Sabrina Carpenter',
      imageUrl: 'https://thedmonline.com/wp-content/uploads/2024/09/SABRINA.png',
    },
    {
      title: 'Supernatural - EP',
      artist: 'NewJeans',
      imageUrl: 'https://i.scdn.co/image/ab67616d00001e027e1eeb0d7cc374a168369c80',
    },
    {
      title: 'Hit Me Hard And Soft',
      artist: 'Billie Eilish',
      imageUrl: 'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62',
    },
    {
      title: 'The Tortured Poets Department',
      artist: 'Taylor Swift',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/th/6/6e/Taylor_Swift_%E2%80%93_The_Tortured_Poets_Department_%28album_cover%29.png',
    },
    {
      title: 'Eternal Sunshine',
      artist: 'Ariana Grande',
      imageUrl: 'https://s.isanook.com/jo/0/ud/494/2472685/eternalsunshinecoverart.jpg',
    },
    {
      title: 'Liar',
      artist: 'BUS',
      imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/63/a0/d1/63a0d12a-575e-f272-f14e-2b9b4f8513d2/24UMGIM92963.rgb.jpg',
    }
  ];

  // Toggle การแสดงผลของ Popular Artists
  toggleShowAll() {
    this.showAll = !this.showAll;
  }

  // Toggle การแสดงผลของ Top Artists
  toggleShowAllTopArtists() {
    this.showAllTopArtists = !this.showAllTopArtists;
  }

  navigateWithDelay(artistName: string) {
    this.isLoading = true; // เริ่มแสดงหน้าโหลด
    setTimeout(() => {
      this.isLoading = false; // ซ่อนหน้าโหลดเมื่อครบเวลา
      this.router.navigate(['/artistprofile', artistName]); // เปลี่ยนเส้นทางไปยังหน้าโปรไฟล์
    }, 2000);
  }

  // ฟังก์ชันสำหรับนำทางไปยังหน้าอัลบั้ม
  onAlbumClick(albumTitle: string) {
    this.router.navigate(['/albumartist', albumTitle]); // เปลี่ยนเส้นทางไปยังหน้า albumartist พร้อมพารามิเตอร์ชื่ออัลบั้ม
  }
}
