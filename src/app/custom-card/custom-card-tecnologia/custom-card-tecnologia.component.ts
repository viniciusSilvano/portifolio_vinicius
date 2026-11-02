import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { ProjetoFilter } from '../../../../src/app/filters/projeto-filters/projeto-filters/class/projetoFilter';
import { Tecnologia } from '../../../../src/app/tecnologias/class/tecnologia';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-custom-card-tecnologia',
    templateUrl: './custom-card-tecnologia.component.html',
    styleUrls: ['./custom-card-tecnologia.component.css', '../css/custom-card.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass]
})
export class CustomCardTecnologiaComponent {
  @Input() tecnologia? : Tecnologia;
  @Input() projetoFilter? : ProjetoFilter;
  @Output() tecnologiaClick = new EventEmitter<number>();
  @Input() clickable : Boolean = true;
  OnClickSearchByTecnologyImage(){
    if(this.tecnologia){
      this.tecnologiaClick.emit(this.tecnologia.id);
    }
  }

}
