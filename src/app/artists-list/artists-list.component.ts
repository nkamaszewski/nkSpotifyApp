import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nk-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {


  @Input()
  nkDataToRender;

  constructor() { }

  ngOnInit() {
  }

}
