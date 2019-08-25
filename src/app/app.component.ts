import { Component } from '@angular/core';
import { GlobalStrings } from './globalStrings/globalString';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  globalUrl: String = GlobalStrings.getGlobalUrlFragment();
  title = 'portifolio-vinicius';
}

