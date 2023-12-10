import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionCard, AccordionProjetoCard, Collapse } from '../../../comuns/class/accordion-card';
import { ProjetoEspecificacao } from 'src/app/projetos/projetos-especificacao/class/projeto_especificacao';

@Component({
  selector: 'app-accordion-card',
  templateUrl: './accordion-card.component.html',
  styleUrls: ['./accordion-card.component.css']
})
export class AccordionCardComponent implements OnInit {

  @Input() accordionCard: AccordionCard;
  @Input() ehAccordionProjetoCard: Boolean = false;

  @Output() resultadoFiltro: EventEmitter<ProjetoEspecificacao[]> = new EventEmitter()

  getAccordion(): any{
    if(this.ehAccordionProjetoCard){
      return this.accordionCard as AccordionProjetoCard;
    }
    return this.accordionCard;
  }

  onFilter(projetosFiltrados: ProjetoEspecificacao[]){
    this.resultadoFiltro.emit(projetosFiltrados);
  }
  constructor() { }

  ngOnInit() {
  }

  changeCollapseProjetoFilters(){
    if(this.accordionCard.collapse == Collapse.COLLAPSED){
      this.accordionCard.collapse = Collapse.NOT_COLLAPSED;
    }else{
      this.accordionCard.collapse = Collapse.COLLAPSED;
    }
  }

}
