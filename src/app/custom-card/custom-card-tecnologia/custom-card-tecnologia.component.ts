import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { ProjetoFilter } from '../../../../src/app/filters/projeto-filters/projeto-filters/class/projetoFilter';
import { Tecnologia } from '../../../../src/app/tecnologias/class/tecnologia';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-custom-card-tecnologia',
    templateUrl: './custom-card-tecnologia.component.html',
    styleUrls: ['./custom-card-tecnologia.component.css', '../css/custom-card.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgClass]
})
export class CustomCardTecnologiaComponent implements OnInit {
  @Input() tecnologia? : Tecnologia;
  @Input() projetoFilter? : ProjetoFilter;
  @Output() onClick : EventEmitter<number> = new EventEmitter<number>();
  @Input() clickable : Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  OnClickSearchByTecnologyImage(){
    if(this.tecnologia){
      this.onClick.emit(this.tecnologia.id);
    }
  }

}
