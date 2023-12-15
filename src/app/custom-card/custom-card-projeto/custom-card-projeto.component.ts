import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProjetoEspecificacao, StatusProjeto, TipoProjeto } from 'src/app/projetos/projetos-especificacao/class/projeto_especificacao';
import { TagUtil } from 'src/app/projetos/projetos-especificacao/util/tag_utl';
@Component({
  selector: 'app-custom-card-projeto',
  templateUrl: './custom-card-projeto.component.html',
  styleUrls: ['./custom-card-projeto.component.css','../css/custom-card.css']
})
export class CustomCardProjetoComponent implements OnInit, AfterViewInit {
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

  getNomeTagPorStatus(status: StatusProjeto) : String{
    return TagUtil.retornarNomeTagPorStatus(status);
  }

  getNomeTagPorTipo(tipo: TipoProjeto) : String{
    return TagUtil.retornaNomeTagPorTipoProjeto(tipo);
  }
}
