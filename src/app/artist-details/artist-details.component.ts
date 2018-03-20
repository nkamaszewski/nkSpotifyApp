import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { MusicService } from '../music.service';


@Component({
  selector: 'nk-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  constructor(private nkActivatedRoute: ActivatedRoute, private nkMusicService: MusicService) { }

  nkArtist;
  nkAlbums;
  nkTopTracks; 

  ngOnInit() {
    this.nkActivatedRoute.params.subscribe((params: Params) =>{
      let id = params['id'];

    this.nkMusicService.nkGetArtist(id).subscribe( artist => {
      artist = artist.json();
      this.nkArtist = artist;   
    })

    this.nkMusicService.nkGetAlbumsFromArtist(id).subscribe ( albums => {
      albums = albums.json();
      this.nkAlbums = albums["items"];
    })

    this.nkMusicService.nkGetTopTracksFromArtist(id).subscribe ( topTracks => {
      topTracks = topTracks.json();
      this.nkTopTracks = topTracks["tracks"];
    })
    })


  }

}
