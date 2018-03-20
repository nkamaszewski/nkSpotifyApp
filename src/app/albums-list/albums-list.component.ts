import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nk-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  @Input()
  nkDataToRender;

  constructor() { }

  ngOnInit() {
  }

  getYear(date){
    let year = date.split("-");
    return year[0];
  }
}
