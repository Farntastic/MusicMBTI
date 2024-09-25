import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/music/components/home/home.component';
import { PlaylistComponent } from './frontend/playlists/components/playlist/playlist.component';
import { ArtistprofileComponent } from './frontend/artist/components/artistprofile/artistprofile.component';
import { ArtistComponent } from './frontend/artist/components/artist/artist.component';
import { AlbumartistComponent } from './frontend/artist/components/albumartist/albumartist.component';
import { SignUpFormComponent } from './frontend/login/components/signup-form/signup-form.component';
import { SignInFormComponent } from  './frontend/login/components/signin-form/signin-form.component';
import { MbtiComponent } from './frontend/music/components/mbti/mbti.component';
import { CardMbtiComponent } from './frontend/music/components/card-mbti/card-mbti.component';
const routes: Routes = [
  { path: '', redirectTo: '/HOME', pathMatch: 'full' },
  { path: 'HOME', component: HomeComponent },
  { path: 'MBTI', component: MbtiComponent },
  { path: 'MBTI/:id', component: MbtiComponent },
  { path: 'cardMBTI', component: MbtiComponent },
  { path: '', redirectTo: '/HOME', pathMatch: 'full' },
  { path: 'HOME', component: HomeComponent },
  { path: 'PLAYLIST', component: PlaylistComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'albumartist/:albumName', component: AlbumartistComponent },
  { path: 'SIGNUP', component: SignUpFormComponent},
  { path: 'SIGNIN', component: SignInFormComponent},
  { path: 'artistprofile/:artistId', component: ArtistprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
