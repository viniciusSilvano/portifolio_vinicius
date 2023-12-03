import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ImageSliderModule } from '../image-slider/image-slider.module';



@NgModule({
  declarations: [CustomCardComponent],
  imports: [
    CommonModule,
    ImageSliderModule
  ],
  exports: [CustomCardComponent]
})
export class CustomCardModule { }
