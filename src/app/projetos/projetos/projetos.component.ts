import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import {ProjetosService} from "../service/projetos.service";
import { Router } from '@angular/router';
import { ProjetoEspecificacao } from '../projetos-especificacao/class/projeto_especificacao';
import { TecnologiaService } from '../../tecnologias/service/tecnologia.service';
import { AccordionFiltro, Collapse } from '../../../../src/app/comuns/class/accordion-card';
import { forkJoin } from 'rxjs';
import { ResultadoProjetoFilter } from '../../../../src/app/filters/projeto-filters/projeto-filters/class/resultado-projeto-filter';
import { CustomCardData } from '../../../../src/app/custom-card/class/custom-card-data';
import { PROJECT_FILTER_ACCORDION_TITLE } from '../../../../src/app/util/app_constants';
import { CustomCardProjetoComponent } from '../../custom-card/custom-card-projeto/custom-card-projeto.component';
import { AccordionFilterCardComponent } from '../../accordions/accordion-card/accordion-filter-card/accordion-filter-card.component';
import { PriorizacaoPorProjeto } from '../projetos-especificacao/data/projects/projeto-dados-comuns';

@Component({
    selector: 'app-projetos',
    templateUrl: './projetos.component.html',
    styleUrls: ['./projetos.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AccordionFilterCardComponent, CustomCardProjetoComponent]
})
export class ProjetosComponent implements OnInit {
  private projetoService = inject(ProjetosService);
  private tecnologiaService = inject(TecnologiaService);
  private router = inject(Router);

  projetosCardsExistente? : ProjetoEspecificacao[];
  projetosTestesPublicosCards?: ProjetoEspecificacao[];
  resultadoProjetoFilter: ResultadoProjetoFilter = new ResultadoProjetoFilter();
  realizarLimpezaFiltros: Boolean = false;

  accordionProjetoFilters: AccordionFiltro = {
    id: 1,
    descricao:"Accordion dos filtros",
    tituloDescricao: PROJECT_FILTER_ACCORDION_TITLE,
    collapse: Collapse.COLLAPSED,
    tecnologiasParaBusca: [],
    projetoList: []
  };

  customCardData: CustomCardData = {
    titulo: 'Resultado Filtro por projeto',
    descricao: ''
  };

  ngOnInit() {
    forkJoin([this.projetoService.getProjetoPessoaisCards(),this.projetoService.getProjetoTestesPublicosCards()])
      .subscribe(results => {
        this.projetosCardsExistente = results[0].sort((p1,p2) => this.ordenarProjetos(p1,p2));
        this.projetosTestesPublicosCards = results[1].sort((p1,p2) => this.ordenarProjetos(p1,p2));
        this.accordionProjetoFilters.projetoList = [...this.projetosCardsExistente,...this.projetosTestesPublicosCards];
      });

    this.accordionProjetoFilters.tecnologiasParaBusca = this.tecnologiaService.findAll()
      .sort((tec1,tec2) => {
        if (tec1.nome > tec2.nome) {
            return 1;
        }

        if (tec1.nome < tec2.nome) {
            return -1;
        }

        return 0;
      });
  }

  ordenarProjetos(p1: ProjetoEspecificacao, p2: ProjetoEspecificacao) : number{
    if( PriorizacaoPorProjeto[p1.id] > PriorizacaoPorProjeto[p2.id]){
      return 1;
    }

    if(PriorizacaoPorProjeto[p1.id] < PriorizacaoPorProjeto[p2.id]){
      return -1;
    }

    return 0;
  }

  redirect(idEspecificacao: number) : void{
    this.router.navigateByUrl(`projeto/${idEspecificacao}`);
  }

  onFilter(resultadoProjetoFilter: ResultadoProjetoFilter){
    this.resultadoProjetoFilter = resultadoProjetoFilter;
    this.customCardData.descricao = `Quantidade de registros: ${resultadoProjetoFilter.projetosCardsFiltered.length}`
  }

  filtroPossuiResultado(): Boolean{
    return this.resultadoProjetoFilter.projetosCardsFiltered.length > 0 && this.resultadoProjetoFilter.qualquerfiltroAcionado;
  }

  solicitarLimpezaFiltros(){
    this.resultadoProjetoFilter.projetosCardsFiltered = [];
    this.resultadoProjetoFilter.qualquerfiltroAcionado = false;
    this.realizarLimpezaFiltros = !this.realizarLimpezaFiltros;
  }
}
