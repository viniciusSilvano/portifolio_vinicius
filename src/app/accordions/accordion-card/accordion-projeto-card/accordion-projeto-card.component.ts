import { ChangeDetectionStrategy, Component, inject, Input, SecurityContext } from '@angular/core';
import { AccordionCard, AccordionProjetoCard, Collapse } from '../../../comuns/class/accordion-card';
import { NgClass } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  imports: [NgClass],
  selector: 'app-accordion-projeto-card',
  styleUrl: './accordion-projeto-card.component.css',
  templateUrl: './accordion-projeto-card.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionProjetoCardComponent {
  @Input() accordionCard?: AccordionCard;

  private sanitizer = inject(DomSanitizer);

  getAccordion(): any{
    return this.accordionCard as AccordionProjetoCard;
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
