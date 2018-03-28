import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';

import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthorizationService {

  constructor(private nkBaseOptions: RequestOptions, private nkHttp: Http) { }

  nkGetSpotifyToken(){
    var nkToken = localStorage.getItem('token');

    // if token is not avalaible in browser LS and URL
    if(!nkToken){
      this.nkAuthorizeUser();
      }
  }

    // current user id as observable - for old spotify accounts id === Name
    private currentUserSourceID = new BehaviorSubject<string>("");
    currentUserID = this.currentUserSourceID.asObservable();

    updateUserID(userID){
      this.currentUserSourceID.next(userID);
    }

    // current user name as observable - new API policy
    private currentUserSourceName = new BehaviorSubject<string>("");
    currentUserName = this.currentUserSourceName.asObservable();

    updateUserName(userName){
      this.currentUserSourceName.next(userName);
    }

  nkSetHeader(){
       var nkToken = localStorage.getItem('token');
      // set token to headers of every http request
      this.nkBaseOptions.headers.set('Authorization', 'Bearer ' + nkToken);
  }


  nkAuthorizeUser(){
    let nkClientId: String = 'ada66ea0216544708da8aa767b7c2a2c';
    let nkScope: String = 'user-read-private+user-read-recently-played+playlist-modify-public+playlist-modify-private';
    let nkResponseType: String = 'token';
    let nkRedirectUri: String = 'http://nkamaszewski.pl/projects/nkSpotify/temp.html';
    let nkShowdialog: String = 'true';

    localStorage.removeItem('token');
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${nkClientId}&scope=${nkScope}&response_type=${nkResponseType}&redirect_uri=${nkRedirectUri}&show_dialog=${nkShowdialog}`);
  }

  isToken(){
    if(localStorage.getItem('token'))
      return true;
    else
      return false;
  }

  nkSignOut(){
    localStorage.removeItem('token');
  }

  nkGetUserId(){
    return this.nkHttp.get('https://api.spotify.com/v1/me');
  }
}
