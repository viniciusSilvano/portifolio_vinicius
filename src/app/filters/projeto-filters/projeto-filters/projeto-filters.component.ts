import { Component, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Tecnologia } from '../../../../../src/app/tecnologias/class/tecnologia';
import { ProjetoEspecificacao } from '../../../projetos/projetos-especificacao/class/projeto_especificacao';
import { ProjetoFilter } from './class/projetoFilter';
import { EventEmitter } from '@angular/core';
import { ResultadoProjetoFilter} from './class/resultado-projeto-filter';
import { SearchUtil } from '../../../../../src/app/util/search_util';
import { ArraysUtil } from '../../../../../src/app/util/arrays_util';
import { StringUtil } from '../../../../../src/app/util/string-util';
import { Tag, TipoTag } from '../../../../../src/app/projetos/projetos-especificacao/class/tag';
import { TagUtil } from '../../../../../src/app/projetos/projetos-especificacao/util/tag_utl';
import { NgClass } from '@angular/common';
import { CustomCardTecnologiaComponent } from '../../../custom-card/custom-card-tecnologia/custom-card-tecnologia.component';

@Component({
    selector: 'app-projeto-filters',
    templateUrl: './projeto-filters.component.html',
    styleUrls: ['./projeto-filters.component.css','../../../shared/css/searcheable_tag_shared.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass, CustomCardTecnologiaComponent]
})
export class ProjetoFiltersComponent implements OnInit {

  @Input() tecnologiasParaBusca: Tecnologia[] = [];
  @Input() projetoList: ProjetoEspecificacao[] = [];

  projetosCardsFiltered: ProjetoEspecificacao[] = [];
  projetoFilter = new ProjetoFilter(new SearchUtil(),new ArraysUtil(),new StringUtil());
  todasTags : Tag[] = TagUtil.retornarTodasAsTags();

  @Output() resultadoFiltro: EventEmitter<ResultadoProjetoFilter> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.projetoFilter.tecnologiasSelecionadasParaBusca = new Array<number>(this.tecnologiasParaBusca.length);
  }

  filterByItem(value : any){
    this.projetoFilter.tituloProjeto = value;
    this.filter();
  }

  private filter(){
    this.projetosCardsFiltered = this.projetoList.filter(
      item => {
        let resultado : Boolean = this.projetoFilter.filter(item);
        return resultado;
      }
    )
    this.resetFilteredProjectsList();
    let resultado: ResultadoProjetoFilter =  {
      projetosCardsFiltered: this.projetosCardsFiltered,
      qualquerfiltroAcionado: this.projetoFilter.temQualquerFiltroAcionado()
    };
    this.resultadoFiltro.emit(
      resultado
     );
  }

  private resetFilteredProjectsList() {
    if (this.projetoFilter.isResetNeeded()) {
      this.projetosCardsFiltered = [];
    }
  }

  OnClickSearchByTecnologyImage(id: number){
    if(this.projetoFilter && this.projetoFilter.tecnologiasSelecionadasParaBusca){
      if(this.projetoFilter.tecnologiasSelecionadasParaBusca.includes(id)){
        this.projetoFilter.tecnologiasSelecionadasParaBusca.splice(this.projetoFilter.tecnologiasSelecionadasParaBusca.indexOf(id),1);
      }else{
        this.projetoFilter.tecnologiasSelecionadasParaBusca.push(id);
      }

      this.filter();
    }
  }

  OnClickSearchByTag(tag: Tag){
    let key : TipoTag = tag.tipoTag;
    if(this.projetoFilter && this.projetoFilter.tagsParaFiltrarPorTipoTag){
      const tags = this.projetoFilter.tagsParaFiltrarPorTipoTag.get(key);
      if(tags){
        if(tags.includes(tag)){
          tags.splice(tags.indexOf(tag),1);
        }else{
          tags.push(tag);
        }
      }
      this.filter();
    }
  }

  tagSelecionadaParaFiltro(tag: Tag): Boolean{
    for(const chaveTag of this.projetoFilter.tagsParaFiltrarPorTipoTag.keys()){
      if(this.projetoFilter.tagsParaFiltrarPorTipoTag.get(chaveTag) && this.projetoFilter.tagsParaFiltrarPorTipoTag.get(chaveTag)?.includes(tag)){
        return true;
      }
    }
    return false;
  }

}
