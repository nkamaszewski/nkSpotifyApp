import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthorizationService } from './authorization.service';
import { AppRoutingModule } from './app-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { ContainerComponent } from './container/container.component';
import { MusicService } from './music.service';
import { PlaylistService } from './playlist.service';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SearcherComponent } from './searcher/searcher.component';
import { SignoutButtonComponent } from './signout-button/signout-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { TracksListComponent } from './tracks-list/tracks-list.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { RecentlyListComponent } from './recently-list/recently-list.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { FailedAuthorizationComponent } from './failed-authorization/failed-authorization.component';
import { FavouritesComponent } from './favourites/favourites.component';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ContainerComponent,
    SearcherComponent,
    SignoutButtonComponent,
    NavbarComponent,
    DashboardComponent,
    ArtistsListComponent,
    TracksListComponent,
    AlbumsListComponent,
    RecentlyListComponent,
    ArtistDetailsComponent,
    AlbumDetailsComponent,
    BackButtonComponent,
    FailedAuthorizationComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthorizationService, MusicService, PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
