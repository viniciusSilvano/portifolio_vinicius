import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider/image-slider.component';


/** 
 * estrutura baseada no video https://www.youtube.com/watch?v=Au4VfcwvjgQ 
 * e neste projeto do github https://github.com/monsterlessonsacademy/monsterlessonsacademy/blob/266-angular-slider/src/app/imageSlider/components/imageSlider/imageSlider.component.html
*/
@NgModule({
  declarations: [ImageSliderComponent],
  imports: [CommonModule],
  exports: [ImageSliderComponent]
})
export class ImageSliderModule { }
