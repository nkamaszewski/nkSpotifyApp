import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


// https://accounts.spotify.com/authorize?client_id=ada66ea0216544708da8aa767b7c2a2c
// ada66ea0216544708da8aa767b7c2a2c
// https://accounts.spotify.com/authorize?client_id=ada66ea0216544708da8aa767b7c2a2c&response_type=token&redirect_uri=http://localhost:4200/

/*
import requestOptions
getToken(){

var token = localStorage.getItem('token');

// jesli nie ma tokena w local storage to sprawdzamy czy mamy go w pasku adresu
if(!token){
var match = window.location.hash.match(/#access_token=(.*?)&/);
token = match && match[1];
localStorage.setItem('token', token);
}

// jesli nie mamy w pamiecy local storage tokenu ani w pasku adresu to trzeba sie zalogowac
if(!token){
  this.authorize();
}
this.baseOptions.headers.set('Authorization', 'Bearer ' + token)
return token;
}

// przekierowani do strone logowania localStorage to tymczasowa pamiec przegladarki
authorize(){

  localStorage.removeItem('token');

  window.location.replace('https://accounts.spotify.com/authorize?client_id=58fb375e04e046c6a568857bab52a236&response_type=token&redirect_uri=http://localhost:4200/');
}



*/