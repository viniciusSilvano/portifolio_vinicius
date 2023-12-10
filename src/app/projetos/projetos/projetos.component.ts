import { Component, OnInit } from '@angular/core';
import {ProjetosService} from "../service/projetos.service";
import { Router } from '@angular/router';
import { ProjetoEspecificacao } from '../projetos-especificacao/class/projeto_especificacao';
import { Tecnologia } from '../../tecnologias/class/tecnologia';
import { TecnologiaService } from '../../tecnologias/service/tecnologia.service';
import { AccordionCard, AccordionProjetoCard, Collapse } from 'src/app/comuns/class/accordion-card';
import { forkJoin } from 'rxjs';
import { ResultadoProjetoFilter } from 'src/app/filters/projeto-filters/projeto-filters/class/resultado-projeto-filter';
import { CustomCardData } from 'src/app/custom-card/class/custom-card-data';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projetosCardsExistente : ProjetoEspecificacao[];
  projetosTestesPublicosCards: ProjetoEspecificacao[];
  resultadoProjetoFilter: ResultadoProjetoFilter = new ResultadoProjetoFilter();
  realizarLimpezaFiltros: Boolean = false;

  accordionProjetoFilters: AccordionProjetoCard = {
    id: 1,
    descricao:"Accordion dos filtros",
    tituloDescricao:"Filtros dos projetos",
    collapse: Collapse.COLLAPSED,
    tecnologiasParaBusca: [],
    projetoList: []
  };

  customCardData: CustomCardData = {
    titulo: 'Resultado Filtro por projeto',
    descricao: ''
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

  onFilter(resultadoProjetoFilter: ResultadoProjetoFilter){
    console.log('Output projeto filtered: ', resultadoProjetoFilter)
    this.resultadoProjetoFilter = resultadoProjetoFilter;
    this.customCardData.descricao = `Quantidade de registros: ${resultadoProjetoFilter.projetosCardsFiltered.length}`
  }
  
  filtroPossuiResultado(): Boolean{
    return this.resultadoProjetoFilter.projetosCardsFiltered.length && this.resultadoProjetoFilter.qualquerfiltroAcionado;
  }

  solicitarLimpezaFiltros(){
    this.resultadoProjetoFilter.projetosCardsFiltered = [];
    this.resultadoProjetoFilter.qualquerfiltroAcionado = false;
    this.realizarLimpezaFiltros = !this.realizarLimpezaFiltros;
  }
}
