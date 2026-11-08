import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, inject, SecurityContext } from '@angular/core';
import { AccordionCard, AccordionProjetoCard, Collapse } from '../../../comuns/class/accordion-card';
import { ResultadoProjetoFilter } from '../../../../../src/app/filters/projeto-filters/projeto-filters/class/resultado-projeto-filter';
import { NgClass } from '@angular/common';
import { ProjetoFiltersComponent } from '../../../filters/projeto-filters/projeto-filters/projeto-filters.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-accordion-card',
    templateUrl: './accordion-card.component.html',
    styleUrls: ['./accordion-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass, ProjetoFiltersComponent]
})
export class AccordionCardComponent {

  @Input() accordionCard?: AccordionCard;
  @Input() ehAccordionProjetoCard: Boolean = false;

  @Output() resultadoFiltro: EventEmitter<ResultadoProjetoFilter> = new EventEmitter()
  private sanitizer = inject(DomSanitizer);

  getAccordion(): any{
    if(this.ehAccordionProjetoCard){
      return this.accordionCard as AccordionProjetoCard;
    }
    return this.accordionCard;
  }

  getDescricaoAccordion(): string | undefined{
    if(this.getAccordion().descricao){
      return this.sanitizer.sanitize(SecurityContext.HTML,  this.getAccordion().descricao) || '' ;
    }
  }

  getTituloDescricaoAccordion(): string | undefined{
     if(this.getAccordion().tituloDescricao){
      return this.sanitizer.sanitize(SecurityContext.HTML,  this.getAccordion().tituloDescricao) || '' ;
    }
  }

  onFilter(projetosFiltrados: ResultadoProjetoFilter){
    this.resultadoFiltro.emit(projetosFiltrados);
  }
  changeCollapseProjetoFilters(){
    if(this.accordionCard){
      if(this.accordionCard.collapse == Collapse.COLLAPSED){
        this.accordionCard.collapse = Collapse.NOT_COLLAPSED;
      }else{
        this.accordionCard.collapse = Collapse.COLLAPSED;
      }
    }
  }

}
