import { Injectable } from '@angular/core';

import { Http, RequestOptions } from '@angular/http';
import { AuthorizationService } from './authorization.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlaylistService {
  constructor(private nkHttp: Http, private auth: AuthorizationService) { }

  
  private nkFavourite = "__nkSpotify";
  private nkFavDescription = "This playlist is used as favourite in nkSpotify App";

  // fav id as observable
  private favPlaylistSourceID = new BehaviorSubject<string>("");
  currentFavPlaylistID = this.favPlaylistSourceID.asObservable();

  updateFavPlaylistID(favId){
    this.favPlaylistSourceID.next(favId);
  }

  //fav playlist tracks as observable
  private favPlaylistTracksSource = new BehaviorSubject([]);
  currentFavPlaylistTracks = this.favPlaylistTracksSource.asObservable();

  updateFavPlaylistTracks(favTracks){
    this.favPlaylistTracksSource.next(favTracks);
  }


  getNkFavourite(){
    return this.nkFavourite;
  }

  getNkFavDescription(){
    return this.nkFavDescription;
  }

  getCurrentUserPlaylists() {
    return this.nkHttp.get('https://api.spotify.com/v1/me/playlists')
  }

  createPlaylist(playlistName, description, userID) {
    return this.nkHttp.post(`https://api.spotify.com/v1/users/${userID}/playlists`, {
      "name": `${playlistName}`,
      "description": `${description}`,
      "public": true
    })
  }

  getPlaylistsTracks(userId, playlistId){
    return this.nkHttp.get(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`);
  }

  isTrackInPlaylist(trackId, playlistArray){
    for(let i in playlistArray){
      if(playlistArray[i]["id"] === trackId){
        return true;
      }
    }
    return false;
  }


  addTrackToPlaylist(userId, playlistId, trackId){
    return this.nkHttp.post(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {"uris": [`spotify:track:${trackId}`]});
  }

  removeTrackFromPlaylist(userId, playlistId, trackId){
    return this.nkHttp.delete(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, new RequestOptions({
      "body":{"uris": [`spotify:track:${trackId}`]}
    }));
  }
}
