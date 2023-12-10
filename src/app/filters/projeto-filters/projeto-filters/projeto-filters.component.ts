import { Component, Input, OnInit, Output } from '@angular/core';
import { Tecnologia } from 'src/app/tecnologias/class/tecnologia';
import { ProjetoEspecificacao } from '../../../projetos/projetos-especificacao/class/projeto_especificacao';
import { ProjetoFilter } from '../../../projetos/class/projetoFilter';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projeto-filters',
  templateUrl: './projeto-filters.component.html',
  styleUrls: ['./projeto-filters.component.css']
})
export class ProjetoFiltersComponent implements OnInit {

  @Input() tecnologiasParaBusca: Tecnologia[] = [];
  @Input() projetoList: ProjetoEspecificacao[] = [];

  projetosCardsFiltered: ProjetoEspecificacao[] = [];
  projetoFilter = new ProjetoFilter();

  @Output() resultadoFiltro: EventEmitter<ProjetoEspecificacao[]> = new EventEmitter(); 
  
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
    this.resultadoFiltro.emit(this.projetosCardsFiltered);
  }

  private resetFilteredProjectsList() {
    if (this.projetoFilter.isResetNeeded()) {
      console.log('resetar filtros');
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
