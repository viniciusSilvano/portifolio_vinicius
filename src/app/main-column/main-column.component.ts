import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
    selector: 'app-main-column',
    templateUrl: './main-column.component.html',
    styleUrls: ['./main-column.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MainColumnComponent implements OnInit {
  public isHome: boolean = false;
  constructor() { }

  ngOnInit() {}

}
