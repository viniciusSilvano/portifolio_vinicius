import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardProjetoComponent as CustomCardProjetoComponent } from './custom-card-projeto/custom-card-projeto.component';
import { ImageSliderModule } from '../image-slider/image-slider.module';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomCardTecnologiaComponent } from './custom-card-tecnologia/custom-card-tecnologia.component';



@NgModule({
  declarations: [CustomCardProjetoComponent,CustomCardComponent, CustomCardTecnologiaComponent],
  imports: [
    CommonModule,
    ImageSliderModule
  ],
  exports: [CustomCardProjetoComponent,CustomCardComponent,CustomCardTecnologiaComponent]
})
export class CustomCardProjetoModule { }
