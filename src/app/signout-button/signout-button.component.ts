import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'nk-signout-button',
  templateUrl: './signout-button.component.html',
  styleUrls: ['./signout-button.component.css']
})
export class SignoutButtonComponent implements OnInit {

  constructor(private auth: AuthorizationService) { }

  ngOnInit() {
  }

  nkSignOut(){
    this.auth.nkSignOut();
  }
}
