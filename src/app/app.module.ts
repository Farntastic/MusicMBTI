import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/music/components/home/home.component';
import { CardMbtiComponent } from './frontend/music/components/card-mbti/card-mbti.component';
import { NavbarComponent } from './frontend/music/components/navbar/navbar.component';
import { BubbleEffectComponent } from './frontend/music/components/bubble-effect/bubble-effect.component';
import { FoottedComponent } from './frontend/music/components/footted/footted.component';
import { SongComponent } from './frontend/music/components/song/song.component';
import { MbtiComponent } from './frontend/music/components/mbti/mbti.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistBarComponent } from './frontend/playlists/components/playlist-bar/playlist-bar.component';
import { PlaylistSongComponent } from './frontend/playlists/components/playlist-song/playlist-song.component';
import { PlaylistComponent } from './frontend/playlists/components/playlist/playlist.component';
import { ArtistComponent } from './frontend/artist/components/artist/artist.component';
import { ArtistprofileComponent } from './frontend/artist/components/artistprofile/artistprofile.component';
import { AlbumartistComponent } from './frontend/artist/components/albumartist/albumartist.component';
import { CardComponent } from './frontend/artist/components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardMbtiComponent,
    NavbarComponent,
    BubbleEffectComponent,
    FoottedComponent,
    SongComponent,
    MbtiComponent,
    PlaylistBarComponent,
    PlaylistSongComponent,
    PlaylistComponent,
    ArtistComponent,
    CardComponent,
    ArtistprofileComponent,
    AlbumartistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient(),provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }