import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ProjetoEspecificacao, StatusProjeto, TipoProjeto, Visibilidade } from '../../../../src/app/projetos/projetos-especificacao/class/projeto_especificacao';
import { TagUtil } from '../../../../src/app/projetos/projetos-especificacao/util/tag_utl';
import { ImageSliderComponent } from '../../image-slider/image-slider/image-slider.component';
import { CustomCardTecnologiaComponent } from '../custom-card-tecnologia/custom-card-tecnologia.component';
import { UpperCasePipe } from '@angular/common';
@Component({
    selector: 'app-custom-card-projeto',
    templateUrl: './custom-card-projeto.component.html',
    styleUrls: ['./custom-card-projeto.component.css', '../css/custom-card.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ImageSliderComponent, CustomCardTecnologiaComponent, UpperCasePipe]
})
export class CustomCardProjetoComponent implements AfterViewInit {
  @Input() projeto? : ProjetoEspecificacao;
  @Input() heightImageSliderInPx? : number;

  @Output() visualizarBtnClick = new EventEmitter<number>();

  @ViewChild('imagesSliderContainer') imagesSliderContainerElement? : ElementRef;
  ngAfterViewInit() {
    if(this.imagesSliderContainerElement){
      this.imagesSliderContainerElement.nativeElement.style.height = `${this.heightImageSliderInPx}px`;
      this.imagesSliderContainerElement.nativeElement.style.width = '100%';
    }
  }

  notifyParent(idProjeto: number | undefined){
    if(idProjeto){
      this.visualizarBtnClick.emit(idProjeto);
    }
  }

  getNomeTagPorStatus(status: StatusProjeto) : string | undefined{
    return TagUtil.retornarNomeTagPorStatus(status);
  }

  getNomeTagPorTipo(tipo: TipoProjeto | undefined) : string | undefined{
    if(tipo !== undefined){
      return TagUtil.retornaNomeTagPorTipoProjeto(tipo);
    }
  }

  getNomeTagPorVisibilidade(visibilidade: Visibilidade | undefined) : string | undefined{
    if(visibilidade !== undefined){
      return TagUtil.retornaNomeTagPorVisibilidade(visibilidade);
    }
  }
}
