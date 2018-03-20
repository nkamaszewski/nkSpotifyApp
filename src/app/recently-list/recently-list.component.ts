import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nk-recently-list',
  templateUrl: './recently-list.component.html',
  styleUrls: ['./recently-list.component.css']
})
export class RecentlyListComponent implements OnInit {



  @Input()
  nkDataToRender;

  constructor() { }

  ngOnInit() {
  }


}
