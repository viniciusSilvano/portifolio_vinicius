import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { MainColumnComponent } from './main-column/main-column.component';
import { RightAsideColumnComponent } from './right-aside-column/right-aside-column.component';
import { LeftAsideColumnComponent } from './left-aside-column/left-aside-column.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MainmenuComponent, MainColumnComponent, RightAsideColumnComponent, LeftAsideColumnComponent, FooterComponent]
})

export class AppComponent {
  title = 'portifolio-vinicius';
}

