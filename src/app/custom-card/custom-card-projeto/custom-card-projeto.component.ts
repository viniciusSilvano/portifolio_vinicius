import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ProjetoEspecificacao, StatusProjeto, TipoProjeto, Visibilidade } from '../../../../src/app/projetos/projetos-especificacao/class/projeto_especificacao';
import { TagUtil } from '../../../../src/app/projetos/projetos-especificacao/util/tag_utl';
@Component({
    selector: 'app-custom-card-projeto',
    templateUrl: './custom-card-projeto.component.html',
    styleUrls: ['./custom-card-projeto.component.css', '../css/custom-card.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CustomCardProjetoComponent implements OnInit, AfterViewInit {
  @Input() projeto? : ProjetoEspecificacao;
  @Input() heightImageSliderInPx? : Number;

  @Output() onVisualizarBtnClick: EventEmitter<Number> = new EventEmitter();

  @ViewChild('imagesSliderContainer') imagesSliderContainerElement? : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.imagesSliderContainerElement){
      this.imagesSliderContainerElement.nativeElement.style.height = `${this.heightImageSliderInPx}px`;
      this.imagesSliderContainerElement.nativeElement.style.width = '100%';
    }
  }

  notifyParent(idProjeto: Number | undefined){
    if(idProjeto){
      this.onVisualizarBtnClick.emit(idProjeto);
    }
  }

  getNomeTagPorStatus(status: StatusProjeto) : String | undefined{
    return TagUtil.retornarNomeTagPorStatus(status);
  }

  getNomeTagPorTipo(tipo: TipoProjeto | undefined) : String | undefined{
    if(tipo){
      return TagUtil.retornaNomeTagPorTipoProjeto(tipo);
    }
  }

  getNomeTagPorVisibilidade(visibilidade: Visibilidade | undefined) : String | undefined{
    if(visibilidade){
      return TagUtil.retornaNomeTagPorVisibilidade(visibilidade);
    }
  }
}
