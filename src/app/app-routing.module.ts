import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/music/components/home/home.component';
import { MbtiComponent } from './frontend/music/components/mbti/mbti.component';
import { CardMbtiComponent } from './frontend/music/components/card-mbti/card-mbti.component';
const routes: Routes = [
  { path: '', redirectTo: '/HOME', pathMatch: 'full' },
  { path: 'HOME', component: HomeComponent },
  { path: 'MBTI', component: MbtiComponent },
  { path: 'MBTI/:id', component: MbtiComponent },
  { path: 'cardMBTI', component: MbtiComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
