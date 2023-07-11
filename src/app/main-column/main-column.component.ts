import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-column',
  templateUrl: './main-column.component.html',
  styleUrls: ['./main-column.component.css']
})
export class MainColumnComponent implements OnInit {
  public isHome: boolean = false;
  constructor() { }

  ngOnInit() {}

}
