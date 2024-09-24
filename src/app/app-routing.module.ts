import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/music/components/home/home.component';
import { PlaylistComponent } from './frontend/playlists/components/playlist/playlist.component';
import { ArtistprofileComponent } from './frontend/artist/components/artistprofile/artistprofile.component';
import { ArtistComponent } from './frontend/artist/components/artist/artist.component';
import { AlbumartistComponent } from './frontend/artist/components/albumartist/albumartist.component';

const routes: Routes = [
  { path: '', redirectTo: '/HOME', pathMatch: 'full' },
  { path: 'HOME', component: HomeComponent },
  { path: 'PLAYLIST', component: PlaylistComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'albumartist/:albumName', component: AlbumartistComponent },
  { path: 'artistprofile/:artistId', component: ArtistprofileComponent }, // artistId is required here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
