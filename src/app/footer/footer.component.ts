import { Component, OnInit } from '@angular/core';
import { GlobalStrings } from '../globalStrings/globalString';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: false
})
export class FooterComponent implements OnInit {
  globalUrl: String = GlobalStrings.getGlobalUrlFragment();
  imagemGitHubPages = GlobalStrings.getAssetUrl("images/Octocat.png")
  constructor() { }

  ngOnInit() {
  }

}
