import { Component } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
  showAll = false;

  cards = [
    { title: 'Short n Sweet', artist: 'sabrina carpenter', imageUrl: 'https://thedmonline.com/wp-content/uploads/2024/09/SABRINA.png' },
    { title: 'Supernatural - EP', artist: 'NewJeans', imageUrl: 'https://i.scdn.co/image/ab67616d00001e027e1eeb0d7cc374a168369c80' },
    { title: 'Hit Me Hard And Soft', artist: 'Billie Eilishycho', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62' },
    { title: 'The Tortured Poets Departmentoch', artist: 'taylor swift', imageUrl: 'https://upload.wikimedia.org/wikipedia/th/6/6e/Taylor_Swift_%E2%80%93_The_Tortured_Poets_Department_%28album_cover%29.png' },
    { title: 'Eternal Sunshine', artist: 'Ariana Grande', imageUrl: 'https://s.isanook.com/jo/0/ud/494/2472685/eternalsunshinecoverart.jpg?ip/resize/w728/q80/jpg' },
    { title: 'Liar', artist: 'BUS', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/63/a0/d1/63a0d12a-575e-f272-f14e-2b9b4f8513d2/24UMGIM92963.rgb.jpg/1200x1200bb.jpg' },
  ];

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
