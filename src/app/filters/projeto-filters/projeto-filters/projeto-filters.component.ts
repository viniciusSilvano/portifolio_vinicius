import { Component, Input, OnInit, Output} from '@angular/core';
import { Tecnologia } from 'src/app/tecnologias/class/tecnologia';
import { ProjetoEspecificacao } from '../../../projetos/projetos-especificacao/class/projeto_especificacao';
import { ProjetoFilter } from './class/projetoFilter';
import { EventEmitter } from '@angular/core';
import { ResultadoProjetoFilter} from './class/resultado-projeto-filter';
import { SearchUtil } from 'src/app/util/search_util';
import { ArraysUtil } from 'src/app/util/arrays_util';
import { StringUtil } from 'src/app/util/string-util';

@Component({
  selector: 'app-projeto-filters',
  templateUrl: './projeto-filters.component.html',
  styleUrls: ['./projeto-filters.component.css']
})
export class ProjetoFiltersComponent implements OnInit {

  @Input() tecnologiasParaBusca: Tecnologia[] = [];
  @Input() projetoList: ProjetoEspecificacao[] = [];

  projetosCardsFiltered: ProjetoEspecificacao[] = [];
  projetoFilter = new ProjetoFilter(new SearchUtil(),new ArraysUtil(),new StringUtil());

  @Output() resultadoFiltro: EventEmitter<ResultadoProjetoFilter> = new EventEmitter(); 
  
  constructor() {}

  ngOnInit() {
    this.projetoFilter.tecnologiasSelecionadasParaBusca = new Array<number>(this.tecnologiasParaBusca.length);
  }

  filterByItem(value){
    this.projetoFilter.tituloProjeto = value;
    this.filter();
  }

  private filter(){
    this.projetosCardsFiltered = this.projetoList.filter(
      item => {
        return this.projetoFilter.filter(item);
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
    if(this.projetoFilter.tecnologiasSelecionadasParaBusca.includes(id)){
      this.projetoFilter.tecnologiasSelecionadasParaBusca.splice(this.projetoFilter.tecnologiasSelecionadasParaBusca.indexOf(id),1);
    }else{
      this.projetoFilter.tecnologiasSelecionadasParaBusca.push(id);
    }

    this.filter();
  }

}
