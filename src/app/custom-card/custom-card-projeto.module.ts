import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardProjetoComponent as CustomCardProjetoComponent } from './custom-card-projeto/custom-card-projeto.component';
import { ImageSliderModule } from '../image-slider/image-slider.module';
import { CustomCardComponent } from './custom-card/custom-card.component';



@NgModule({
  declarations: [CustomCardProjetoComponent,CustomCardComponent],
  imports: [
    CommonModule,
    ImageSliderModule
  ],
  exports: [CustomCardProjetoComponent,CustomCardComponent]
})
export class CustomCardProjetoModule { }
