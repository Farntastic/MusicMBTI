import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/music/components/home/home.component';
import { PlaylistComponent } from './frontend/playlists/playlist/playlist.component';


const routes: Routes = [
  { path: '', redirectTo: '/HOME', pathMatch: 'full' },
  { path: 'HOME', component: HomeComponent },
  { path: 'PLAYLIST', component: PlaylistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
