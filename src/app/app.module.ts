import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // เพิ่ม FormsModule
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/music/components/home/home.component';
import { CardMbtiComponent } from './frontend/music/components/card-mbti/card-mbti.component';
import { NavbarComponent } from './frontend/music/components/navbar/navbar.component';
import { BubbleEffectComponent } from './frontend/music/components/bubble-effect/bubble-effect.component';
import { FoottedComponent } from './frontend/music/components/footted/footted.component';
import { SongComponent } from './frontend/music/components/song/song.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistHeadedComponent } from './frontend/playlists/components/playlist-headed/playlist-headed.component';
import { PlaylistBarComponent } from './frontend/playlists/components/playlist-bar/playlist-bar.component';
import { PlaylistSongComponent } from './frontend/playlists/components/playlist-song/playlist-song.component';
import { SongBarComponent } from './frontend/playlists/components/song-bar/song-bar.component';
import { PlaylistComponent } from './frontend/playlists/components/playlist/playlist.component';
import { ArtistComponent } from './frontend/artist/components/artist/artist.component';
import { ArtistprofileComponent } from './frontend/artist/components/artistprofile/artistprofile.component';
import { AlbumartistComponent } from './frontend/artist/components/albumartist/albumartist.component';
import { CardComponent } from './frontend/artist/components/card/card.component';
import { SignUpFormComponent } from './frontend/login/components/signup-form/signup-form.component';
import { SignInFormComponent } from './frontend/login/components/signin-form/signin-form.component';
import { UserComponent } from './frontend/user/components/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardMbtiComponent,
    NavbarComponent,
    BubbleEffectComponent,
    FoottedComponent,
    SongComponent,
    PlaylistHeadedComponent,
    PlaylistBarComponent,
    PlaylistSongComponent,
    SongBarComponent,
    PlaylistComponent,
    ArtistComponent,
    CardComponent,
    ArtistprofileComponent,
    AlbumartistComponent,
    SignUpFormComponent,
    SignInFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }