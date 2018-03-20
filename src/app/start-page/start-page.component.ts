import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'nk-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
   }

  nkAuthorized(){
    return this.authService.isToken();
  }

  nkAuthorize(){
   this.authService.nkGetSpotifyToken();
  }

  nkSetHeader(){
    this.authService.nkSetHeader();
  }
}
