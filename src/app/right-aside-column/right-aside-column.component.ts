import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GlobalStrings } from '../globalStrings/globalString';
import { PROJECT_FILTER_ACCORDION_TITLE } from '../util/app_constants';

@Component({
    selector: 'app-right-aside-column',
    templateUrl: './right-aside-column.component.html',
    styleUrls: ['./right-aside-column.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager
})
export class RightAsideColumnComponent implements OnInit {
  globalUrl: string = GlobalStrings.getGlobalUrlFragment();
  project_filter_accordion_title = PROJECT_FILTER_ACCORDION_TITLE;
  localFotoPerfil = GlobalStrings.getAssetUrl("images/minhaFoto.jpeg");

  constructor() { }

  ngOnInit() {
  }

}
