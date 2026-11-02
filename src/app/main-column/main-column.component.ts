import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-main-column',
    templateUrl: './main-column.component.html',
    styleUrls: ['./main-column.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterOutlet]
})
export class MainColumnComponent implements OnInit {
  public isHome: boolean = false;
  constructor() { }

  ngOnInit() {}

}
