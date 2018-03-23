import { Component, OnInit, Input } from '@angular/core';

import { PlaylistService } from '../playlist.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'nk-recently-list',
  templateUrl: './recently-list.component.html',
  styleUrls: ['./recently-list.component.css']
})
export class RecentlyListComponent implements OnInit {



  @Input()
  nkDataToRender;


  favPlaylist;
  favID;
  userID;

  constructor(private playlistService: PlaylistService, private auth: AuthorizationService) { }

  ngOnInit() {
    this.playlistService.currentFavPlaylistTracks
        .subscribe( 
          tracks => this.favPlaylist = tracks
        );
        
    this.playlistService.currentFavPlaylistID
        .subscribe( 
          response => this.favID = response 
        );

    this.auth.currentUserID
        .subscribe(
          response => this.userID = response
        );
  }

  isInFavPlaylist(trackId, playlistArray){
    return this.playlistService.isTrackInPlaylist(trackId, playlistArray);
  }

  nkAddToFav(userId, playlistId, trackId){
    this.playlistService.addTrackToPlaylist(userId, playlistId, trackId)
        .subscribe( resp =>{
          let status = resp.status;
          // if track added successful, we update our playlist (observable) with new added track
          if(status === 201){
            this.playlistService.getPlaylistsTracks(userId, playlistId).subscribe( data => {
              data = data.json();
              let items = data["items"];
              // cause playlist has different data structure than another data from Spotify API
              let favTracks = [];
              for (let i in items){
                favTracks[i] = items[i]["track"];
              }
              this.playlistService.updateFavPlaylistTracks(favTracks);
            });
          }else{
            console.log("cannot add track to playlist");
          }
    })
  }

}
