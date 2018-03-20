import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nk-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.css']
})
export class TracksListComponent implements OnInit {

  

  @Input()
  nkDataToRender;

  constructor() { }

  ngOnInit() {
  }

}
