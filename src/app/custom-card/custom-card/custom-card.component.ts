import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProjetoEspecificacao } from 'src/app/projetos/projetos-especificacao/class/projeto_especificacao';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit, AfterViewInit {
  @Input() projeto : ProjetoEspecificacao;
  @Input() heightImageSliderInPx : Number;

  @Output() onVisualizarBtnClick: EventEmitter<Number> = new EventEmitter();

  @ViewChild('imagesSliderContainer', {static: false}) imagesSliderContainerElement : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.imagesSliderContainerElement.nativeElement.style.height = `${this.heightImageSliderInPx}px`;
    this.imagesSliderContainerElement.nativeElement.style.width = '100%';
  }

  notifyParent(idProjeto: Number){
    this.onVisualizarBtnClick.emit(idProjeto);
  }
}
