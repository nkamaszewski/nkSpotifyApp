import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Http } from '@angular/http';

@Injectable()
export class MusicService {

  constructor(private nkHttp: Http ) { }

  nkGetMusic(type, query){
      return this.nkHttp.get(`https://api.spotify.com/v1/search?type=${type}&query=${query}`)
  }

  nkGetRecentlyPlayedMusic(){
    return this.nkHttp.get('https://api.spotify.com/v1/me/player/recently-played');
  }

  nkGetTracksFromAlbum(id){
    return this.nkHttp.get(`https://api.spotify.com/v1/albums/${id}/tracks`);
  }

  nkGetAlbumsFromArtist(id){
    return this.nkHttp.get(`https://api.spotify.com/v1/artists/${id}/albums`);
  }

  nkGetTopTracksFromArtist(id){
    let country = 'PL';
    return this.nkHttp.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=${country}`);
  }

  nkGetArtist(id){
    return this.nkHttp.get(`https://api.spotify.com/v1/artists/${id}`);
  }

  nkGetAlbum(id){
    return this.nkHttp.get(`https://api.spotify.com/v1/albums/${id}`);
  }
}


