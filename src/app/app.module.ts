import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/music/components/home/home.component';
import { CardMbtiComponent } from './frontend/music/components/card-mbti/card-mbti.component';
import { NavbarComponent } from './frontend/music/components/navbar/navbar.component';
import { BubbleEffectComponent } from './frontend/music/components/bubble-effect/bubble-effect.component';
import { FoottedComponent } from './frontend/music/components/footted/footted.component';
import { SongComponent } from './frontend/music/components/song/song.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistHeadedComponent } from './frontend/playlists/playlist-headed/playlist-headed.component';
import { PlaylistBarComponent } from './frontend/playlists/playlist-bar/playlist-bar.component';
import { PlaylistSongComponent } from './frontend/playlists/playlist-song/playlist-song.component';
import { SongBarComponent } from './frontend/playlists/song-bar/song-bar.component';
import { PlaylistComponent } from './frontend/playlists/playlist/playlist.component';



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
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }