import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetosEspecificacaoComponent } from './projetos-especificacao/projetos-especificacao.component';
import { CustomCardProjetoModule } from '../custom-card/custom-card-projeto.module';
import { ImageSliderModule } from '../image-slider/image-slider.module';
import { AccordionCardModule } from '../accordions/accordion-card/accordion-card.module';
import { ProjetoFiltersModule } from '../filters/projeto-filters/projeto-filters.module';
import { ModalModule } from '../comuns/modal/modal.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ProjetosComponent,ProjetosEspecificacaoComponent],
  imports: [
    CommonModule,
    CustomCardProjetoModule,
    ImageSliderModule,
    ProjetoFiltersModule,
    AccordionCardModule,
    AppRoutingModule,
    ModalModule
  ],
  exports:[ProjetosComponent,ProjetosEspecificacaoComponent]
})
export class ProjetoModule { }
