import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GlobalStrings } from '../globalStrings/globalString';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  globalUrl: string = GlobalStrings.getGlobalUrlFragment();
  imagemGitHubPages = GlobalStrings.getAssetUrl("images/Octocat.png")
}
