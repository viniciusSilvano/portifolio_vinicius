import { Component, OnInit } from '@angular/core';
import { GlobalStrings } from '../globalStrings/globalString';
@Component({
  selector: 'app-right-aside-column',
  templateUrl: './right-aside-column.component.html',
  styleUrls: ['./right-aside-column.component.css']
})
export class RightAsideColumnComponent implements OnInit {
  globalUrl: String = GlobalStrings.getGlobalUrlFragment();
  constructor() { }

  ngOnInit() {
  }

}
