import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GlobalStrings } from '../globalStrings/globalString';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FooterComponent implements OnInit {
  globalUrl: String = GlobalStrings.getGlobalUrlFragment();
  imagemGitHubPages = GlobalStrings.getAssetUrl("images/Octocat.png")
  constructor() { }

  ngOnInit() {
  }

}
