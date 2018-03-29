import { Component, OnInit } from '@angular/core';

import { MusicService } from '../music.service';

@Component({
  selector: 'nk-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  constructor(private music: MusicService) { }

  nkRecentlyPlayed;
  nkViewMode;
  nkData;
  type: String;
  query: String;
  nkValidation: boolean = false;
  

  ngOnInit() {
    this.type = "album";
    this.query = "Sade";
    this.nkViewMode = "track";
       
    this.music.nkGetRecentlyPlayedMusic()
      .subscribe(response => {
        response = response.json();
        this.nkRecentlyPlayed = response["items"];
      })

    // init user will see on dashboard albums of Sade
    this.getMusic();
    
  }

  getMusic() {
    if (this.query) {
      this.nkValidation = false;
      this.nkViewMode = this.type;
      this.music.nkGetMusic(this.type, this.query)
        .subscribe(response => {
          response = response.json();
          // this is how response from spotify looks like
          let typeWithS = this.type + "s";
          this.nkData = response[typeWithS].items;
          //console.log(this.nkData);
        });
    } else {
      this.nkValidation = true;
    }
  }

  onKey(event){
    // if user paste enter
    if(event.keyCode === 13){
      this.getMusic();
    }
  }
}
