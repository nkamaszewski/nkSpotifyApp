import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'nk-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private playlistService: PlaylistService) { }

  favPlaylist;

  ngOnInit() {
    this.playlistService.currentFavPlaylistTracks
    .subscribe( 
      tracks => this.favPlaylist = tracks
    );  
  }

}
