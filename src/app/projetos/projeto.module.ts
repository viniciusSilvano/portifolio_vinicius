import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetosEspecificacaoComponent } from './projetos-especificacao/projetos-especificacao.component';
import { CustomCardModule } from '../custom-card/custom-card.module';
import { ImageSliderModule } from '../image-slider/image-slider.module';
import { AppRoutingModule } from '../app-routing.module';
import { AccordionCardModule } from '../accordions/accordion-card/accordion-card.module';
import { ProjetoFiltersModule } from '../filters/projeto-filters/projeto-filters.module';


@NgModule({
  declarations: [ProjetosComponent,ProjetosEspecificacaoComponent],
  imports: [
    CommonModule,
    CustomCardModule,
    ImageSliderModule,
    AppRoutingModule,
    ProjetoFiltersModule,
    AccordionCardModule
  ],
  exports:[ProjetosComponent,ProjetosEspecificacaoComponent]
})
export class ProjetoModule { }
