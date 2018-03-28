import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../authorization.service';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'nk-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthorizationService, private playlistService: PlaylistService) { }

  token;
 
  ngOnInit() {
    this.token = localStorage.getItem('token');
    

    // sets init value
    this.auth.nkGetUserId().subscribe( response => {
      response = response.json();
      console.log(response);
      let currentUserid = response["id"];
      this.auth.updateUserID(currentUserid);

      let currentUserName = response["display_name"];
      this.auth.updateUserName(currentUserName);
    
    // if user is properly log in then find or create a internal fav playlist
    if(localStorage.getItem('token')){ 
    // if nkSpotify fav playlist is currently exist
    this.playlistService.getCurrentUserPlaylists().subscribe(response => {
      response = response.json();
      let userPlaylists = response["items"];

      let isAvalaible = false;

      for (let i in userPlaylists) {
        if (userPlaylists[i]["name"] === this.playlistService.getNkFavourite()) {
          this.playlistService.updateFavPlaylistID(userPlaylists[i]["id"]);
          isAvalaible = true;
        }
      }
      // if not, we are going to create it
      if(!isAvalaible){
      this.auth.nkGetUserId().subscribe(response => {
        response = response.json();
        let userId = response["id"];
        this.playlistService.createPlaylist(this.playlistService.getNkFavourite(), this.playlistService.getNkFavDescription(), userId)
          .subscribe(resp => {
            resp = resp.json();
            // save global fav playlist id
            this.playlistService.updateFavPlaylistID(resp["id"]);
          });
      });
    }
    
   });
    }

    // init fav playlist tracks, first download
    this.playlistService.currentFavPlaylistID
    .subscribe(
      id => {
        if(id){
        let favId = id;
        
        this.auth.currentUserID.subscribe( userId => {          
          this.playlistService.getPlaylistsTracks(userId, favId).subscribe( data => {
            data = data.json();
            let items = data["items"];
            // cause playlist has different data structure than another data from Spotify API
            let favTracks = [];
            for (let i in items){
              favTracks[i] = items[i]["track"];
            }
            this.playlistService.updateFavPlaylistTracks(favTracks);
          })
        }) 
      }   
      })

    });
  }
}
