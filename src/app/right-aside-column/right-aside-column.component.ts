import { Component, OnInit } from '@angular/core';
import { GlobalStrings } from '../globalStrings/globalString';
import { PROJECT_FILTER_ACCORDION_TITLE } from '../util/app_constants';

@Component({
  selector: 'app-right-aside-column',
  templateUrl: './right-aside-column.component.html',
  styleUrls: ['./right-aside-column.component.css']
})
export class RightAsideColumnComponent implements OnInit {
  globalUrl: String = GlobalStrings.getGlobalUrlFragment();
  project_filter_accordion_title = PROJECT_FILTER_ACCORDION_TITLE;

  constructor() { }

  ngOnInit() {
  }

}
