import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'nk-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.css']
})
export class TracksListComponent implements OnInit {

  

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
