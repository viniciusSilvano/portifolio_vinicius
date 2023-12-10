import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomCardData } from '../class/custom-card-data';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css','../css/custom-card.css']
})
export class CustomCardComponent implements OnInit {

  @Input() customCardData: CustomCardData;

  @Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  buttonClicked(){
    this.onButtonClick.emit();
  }

}
