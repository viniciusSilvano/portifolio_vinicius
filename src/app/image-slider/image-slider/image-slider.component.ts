import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { Imagem } from '../../../../src/app/comuns/class/classesComuns';

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ImageSliderComponent implements OnInit, OnDestroy, OnChanges {

  @Input() slides?: Imagem[];
  @Input() hideDots?: Boolean;

  currentIndex: number = 0;
  timeoutSubscription?: Subscription;
  waitForSubscritionTimer?: Subscription;

  ngOnInit(): void {
    this.initImageCycle();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.slides.previousValue != changes.slides.currentValue &&  this.timeoutSubscription){
      this.timeoutSubscription.unsubscribe();
      this.initImageCycle();
    }
  }

  initImageCycle(): void{
    this.timeoutSubscription = interval(3000)
      .subscribe((val) => {this.goToNext()});
  }

  ngOnDestroy() {
    this.timeoutSubscription?.unsubscribe();
  }

  constructor() { }

  private onAnyArrowOrDotClick(): void{
    if(this.waitForSubscritionTimer){
      this.waitForSubscritionTimer.unsubscribe();
    }
    this.waitForSubscritionTimer = timer(4000).subscribe(() => this.initImageCycle());
    this.timeoutSubscription?.unsubscribe();
  }

  onClickRightArrow(): void{
    this.onAnyArrowOrDotClick();
    this.goToNext();
  }

  goToNext(): void{
    if(this.slides){
      const isLastSlide = this.currentIndex === this.slides.length - 1;
      const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
      this.currentIndex = newIndex;
    }
  }

  isLastSlide(){
    if(this.slides){
      return this.currentIndex === this.slides.length - 1;
    }
  }

  isFirstSlide(){
    return this.currentIndex === 0;
  }

  onClickLeftArrow(): void{
    this.onAnyArrowOrDotClick();
    this.goToPrevious();
  }

  goToPrevious(): void{
    if(this.slides){
      const isFirstSlide = this.isFirstSlide();
      const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
      this.currentIndex = newIndex;
    }
  }


  goToSlide(slideIndex : number) : void{
    this.onAnyArrowOrDotClick();
    this.currentIndex = slideIndex;
  }

  getCurrentSliderUrl() : string | undefined{
    if(this.slides){
      return `url(${this.slides[this.currentIndex].source})`;
    }
  }

  getCurrentImageTitle() : string | undefined{
    if(this.slides){
      return this.slides[this.currentIndex].title;
    }
    return undefined;
  }

  checkCurrentDot(indexDot : any): Boolean{
    return this.currentIndex == indexDot
  }

}
