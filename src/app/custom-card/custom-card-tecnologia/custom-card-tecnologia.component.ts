import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjetoFilter } from 'src/app/filters/projeto-filters/projeto-filters/class/projetoFilter';
import { Tecnologia } from 'src/app/tecnologias/class/tecnologia';

@Component({
  selector: 'app-custom-card-tecnologia',
  templateUrl: './custom-card-tecnologia.component.html',
  styleUrls: ['./custom-card-tecnologia.component.css','../css/custom-card.css']
})
export class CustomCardTecnologiaComponent implements OnInit {
  @Input() tecnologia : Tecnologia;
  @Input() projetoFilter : ProjetoFilter;
  @Output() onClick : EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  OnClickSearchByTecnologyImage(){
    this.onClick.emit(this.tecnologia.id);
  }

}
