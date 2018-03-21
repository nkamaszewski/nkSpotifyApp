import { Component, OnInit, Input } from '@angular/core';

import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'nk-recently-list',
  templateUrl: './recently-list.component.html',
  styleUrls: ['./recently-list.component.css']
})
export class RecentlyListComponent implements OnInit {



  @Input()
  nkDataToRender;


  favPlaylist;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlistService.currentFavPlaylistTracks
        .subscribe( 
          tracks => this.favPlaylist = tracks
        );    
  }

  isInFavPlaylist(trackId, playlistArray){
    return this.playlistService.isTrackInPlaylist(trackId, playlistArray);
  }

}
