import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { MusicService } from '../music.service';

@Component({
  selector: 'nk-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  constructor(private nkActivatedRoute: ActivatedRoute, private nkMusicService: MusicService) { }

  nkAlbumTracks;
  nkAlbum;

  ngOnInit() {
    this.nkActivatedRoute.params.subscribe((params: Params) =>{
      let id = params['id'];

      this.nkMusicService.nkGetTracksFromAlbum(id).subscribe( tracks => {
        tracks = tracks.json();
        this.nkAlbumTracks = tracks["items"];
      })

      this.nkMusicService.nkGetAlbum(id).subscribe ( album => {
        album = album.json();
        this.nkAlbum = album;
      })

    })
  }

}
