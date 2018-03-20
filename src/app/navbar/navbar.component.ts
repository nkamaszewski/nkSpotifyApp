import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'nk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthorizationService) { }

  userId: String;

  ngOnInit() {
    this.auth.currentUserID
    .subscribe( 
      id => this.userId = id
    );
  }

}
