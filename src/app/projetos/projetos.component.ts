import { Component, OnInit } from '@angular/core';
import {ProjetosService} from "./service/projetos.service";
import { Router } from '@angular/router';
import { AccordionCard, Collapse, ProjetoEspecificacao } from '../projetos-especificacao/class/projeto_especificacao';
import { Tecnologia } from '../tecnologias/class/tecnologia';
import { TecnologiaService } from '../tecnologias/service/tecnologia.service';
import { ProjetoFilter } from './class/projetoFilter';
@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projetosCardsExistente : ProjetoEspecificacao[];
  projetosTestesPublicosCards: ProjetoEspecificacao[];
  projetosCardsFiltered: ProjetoEspecificacao[] = [];
  tecnologiasParaBusca: Tecnologia[] = [];
  projetoFilter = new ProjetoFilter();

  constructor(
    private projetoService: ProjetosService,
    private tecnologiaService: TecnologiaService, 
    private router: Router) { }

  accordionProjetoFilters: AccordionCard = {
    id: 1,
    descricao:"Accordion dos filtros",
    tituloDescricao:"Filtros dos projetos",
    collapse: Collapse.COLLAPSED
  };

  ngOnInit() {
    this.projetoService.getProjetoPessoaisCards()
    .subscribe(
        projetos => {
          this.projetosCardsExistente = projetos;
        }
      );
      this.projetoService.getProjetoTestesPublicosCards()
      .subscribe(
        projetos => {
          this.projetosTestesPublicosCards = projetos;
        }
      );

      this.tecnologiasParaBusca = this.tecnologiaService.findAll();
      this.projetoFilter.tecnologiasSelecionadasParaBusca = new Array<number>(this.tecnologiasParaBusca.length);
  }

  filterByItem(value){
    this.projetoFilter.tituloProjeto = value;
    this.filter();
  }

  private filter(){
    this.projetosCardsFiltered = [...this.projetosCardsExistente,...this.projetosTestesPublicosCards].filter(
      item => {
        return this.projetoFilter.filter(item);
      }
    )
    this.resetFilteredProjectsList();
  }

  private resetFilteredProjectsList() {
    if (this.projetoFilter.isResetNeeded()) {
      this.projetosCardsFiltered = [];
    }
  }

  redirect(idEspecificacao: number) : void{
    this.router.navigateByUrl(`projeto/${idEspecificacao}`);
  }

  OnClickSearchByTecnologyImage(id: number){
    if(this.projetoFilter.tecnologiasSelecionadasParaBusca.includes(id)){
      this.projetoFilter.tecnologiasSelecionadasParaBusca.splice(this.projetoFilter.tecnologiasSelecionadasParaBusca.indexOf(id),1);
    }else{
      this.projetoFilter.tecnologiasSelecionadasParaBusca.push(id);
    }

    this.filter();
  }

  changeCollapseProjetoFilters(){
    if(this.accordionProjetoFilters.collapse == Collapse.COLLAPSED){
      this.accordionProjetoFilters.collapse = Collapse.NOT_COLLAPSED;
    }else{
      this.accordionProjetoFilters.collapse = Collapse.COLLAPSED;
    }
  }

}
