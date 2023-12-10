import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionCardComponent } from './accordion-card/accordion-card.component';
import { ProjetoFiltersModule } from '../../filters/projeto-filters/projeto-filters.module';



@NgModule({
  declarations: [AccordionCardComponent],
  imports: [
    CommonModule,
    ProjetoFiltersModule
  ],
  exports:[AccordionCardComponent]
})
export class AccordionCardModule { }
