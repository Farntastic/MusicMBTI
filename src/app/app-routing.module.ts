import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/music/components/home/home.component';
import { PlaylistComponent } from './frontend/music/components/playlist/playlist.component';
import { ArtistprofileComponent } from './frontend/artist/components/artistprofile/artistprofile.component';
import { ArtistComponent } from './frontend/artist/components/artist/artist.component';
import { AlbumartistComponent } from './frontend/artist/components/albumartist/albumartist.component';

const routes: Routes = [
  { path: '', redirectTo: '/HOME', pathMatch: 'full' },
  { path: 'HOME', component: HomeComponent },
  { path: 'PLAYLIST', component: PlaylistComponent },
  { path: 'artistprofile', component: ArtistprofileComponent },
  { path: 'artistprofile/:artistName', component: ArtistprofileComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'albumartist/:albumName', component: AlbumartistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
