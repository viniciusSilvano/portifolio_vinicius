import { Component, OnInit } from '@angular/core';
import { GlobalStrings } from '../globalStrings/globalString';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  globalUrl: String = GlobalStrings.getGlobalUrlFragment();
  constructor() { }

  ngOnInit() {
  }

}
