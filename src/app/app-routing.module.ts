import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SearcherComponent } from './searcher/searcher.component';
import { StartPageComponent } from './start-page/start-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'search', component: DashboardComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: 'artist/:id', component: ArtistDetailsComponent},
  { path: 'album/:id', component: AlbumDetailsComponent},
  { path: 'favourites', component: FavouritesComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {} 
