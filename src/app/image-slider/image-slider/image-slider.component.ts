import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Imagem } from 'src/app/comuns/class/classesComuns';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, OnDestroy {

  @Input() slides: Imagem[];
  @Input() hideDots: Boolean;

  currentIndex: number = 0;
  timeoutSubscription: Subscription;

  ngOnInit(): void {
    this.timeoutSubscription = interval(3000)
      .subscribe((val) => {this.goToNext()});
  }

  ngOnDestroy() {
    this.timeoutSubscription.unsubscribe();
  }

  constructor() { }

  goToNext(): void{
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1; 
    this.currentIndex = newIndex;
  }

  goToPrevious(): void{
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex 
  }

  goToSlide(slideIndex : number) : void{
    this.currentIndex = slideIndex;
  }

  getCurrentSliderUrl() : String{
    return `url(${this.slides[this.currentIndex].source})`;
  }

}
