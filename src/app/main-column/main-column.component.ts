import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-main-column',
    templateUrl: './main-column.component.html',
    styleUrls: ['./main-column.component.css'],
    standalone: false
})
export class MainColumnComponent implements OnInit {
  public isHome: boolean = false;
  constructor() { }

  ngOnInit() {}

}
