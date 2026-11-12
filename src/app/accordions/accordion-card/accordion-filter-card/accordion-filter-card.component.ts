import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, SecurityContext } from '@angular/core';
import { ProjetoFiltersComponent } from '../../../filters/projeto-filters/projeto-filters/projeto-filters.component';
import { AccordionCard, AccordionFiltro, Collapse } from '../../../comuns/class/accordion-card';
import { ResultadoProjetoFilter } from '../../../filters/projeto-filters/projeto-filters/class/resultado-projeto-filter';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  imports: [NgClass, ProjetoFiltersComponent],
  selector: 'app-accordion-filter-card',
  styleUrl: './accordion-filter-card.component.css',
  templateUrl: './accordion-filter-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class AccordionFilterCardComponent {
  @Input() accordionCard?: AccordionCard;

  @Output() resultadoFiltro: EventEmitter<ResultadoProjetoFilter> = new EventEmitter()
  private sanitizer = inject(DomSanitizer);

  getAccordion(): any{
    return this.accordionCard as AccordionFiltro;
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
