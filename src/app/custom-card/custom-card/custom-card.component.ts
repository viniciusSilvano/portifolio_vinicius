import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { CustomCardData } from '../class/custom-card-data';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-custom-card',
    templateUrl: './custom-card.component.html',
    styleUrls: ['./custom-card.component.css', '../css/custom-card.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [UpperCasePipe]
})
export class CustomCardComponent {

  @Input() customCardData?: CustomCardData;

  @Output() buttonClick = new EventEmitter<void>();
  buttonClicked(){
    this.buttonClick.emit();
  }

}
