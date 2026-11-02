import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-main-column',
    templateUrl: './main-column.component.html',
    styleUrls: ['./main-column.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet]
})
export class MainColumnComponent {
  public isHome: boolean = false;
}
