import { Component, OnInit } from '@angular/core';
import {ProjetosService} from "../service/projetos.service";
import { Router } from '@angular/router';
import { ProjetoEspecificacao } from '../projetos-especificacao/class/projeto_especificacao';
import { Tecnologia } from '../../tecnologias/class/tecnologia';
import { TecnologiaService } from '../../tecnologias/service/tecnologia.service';
import { AccordionCard, AccordionProjetoCard, Collapse } from 'src/app/comuns/class/accordion-card';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projetosCardsExistente : ProjetoEspecificacao[];
  projetosTestesPublicosCards: ProjetoEspecificacao[];
  projetosCardsFiltered: ProjetoEspecificacao[] = [];

  accordionProjetoFilters: AccordionProjetoCard = {
    id: 1,
    descricao:"Accordion dos filtros",
    tituloDescricao:"Filtros dos projetos",
    collapse: Collapse.COLLAPSED,
    tecnologiasParaBusca: [],
    projetoList: []
  };

  constructor(
    private projetoService: ProjetosService,
    private tecnologiaService: TecnologiaService, 
    private router: Router) { }

  ngOnInit() {
    forkJoin([this.projetoService.getProjetoPessoaisCards(),this.projetoService.getProjetoTestesPublicosCards()])
      .subscribe(results => {
        this.projetosCardsExistente = results[0];
        this.projetosTestesPublicosCards = results[1];
        this.accordionProjetoFilters.projetoList = [...this.projetosCardsExistente,...this.projetosTestesPublicosCards];
      });

    this.accordionProjetoFilters.tecnologiasParaBusca = this.tecnologiaService.findAll();
  }

  redirect(idEspecificacao: number) : void{
    this.router.navigateByUrl(`projeto/${idEspecificacao}`);
  }

  onFilter(projetosCardsFiltered: ProjetoEspecificacao[]){
    console.log('Output projeto filtered: ', projetosCardsFiltered)
    this.projetosCardsFiltered = projetosCardsFiltered;
  }

  changeCollapseProjetoFilters(){
    if(this.accordionProjetoFilters.collapse == Collapse.COLLAPSED){
      this.accordionProjetoFilters.collapse = Collapse.NOT_COLLAPSED;
    }else{
      this.accordionProjetoFilters.collapse = Collapse.COLLAPSED;
    }
  }

}
