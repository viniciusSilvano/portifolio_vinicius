import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetosEspecificacaoComponent } from './projetos-especificacao/projetos-especificacao.component';
import { CustomCardProjetoModule } from '../custom-card/custom-card-projeto.module';
import { ImageSliderModule } from '../image-slider/image-slider.module';
import { AppRoutingModule } from '../app-routing.module';
import { AccordionCardModule } from '../accordions/accordion-card/accordion-card.module';
import { ProjetoFiltersModule } from '../filters/projeto-filters/projeto-filters.module';


@NgModule({
  declarations: [ProjetosComponent,ProjetosEspecificacaoComponent],
  imports: [
    CommonModule,
    CustomCardProjetoModule,
    ImageSliderModule,
    AppRoutingModule,
    ProjetoFiltersModule,
    AccordionCardModule
  ],
  exports:[ProjetosComponent,ProjetosEspecificacaoComponent]
})
export class ProjetoModule { }
