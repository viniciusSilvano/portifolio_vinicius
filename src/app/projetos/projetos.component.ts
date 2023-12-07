import { Component, OnInit } from '@angular/core';
import {ProjetosService} from "./service/projetos.service";
import { Router } from '@angular/router';
import { ProjetoEspecificacao } from '../projetos-especificacao/class/projeto_especificacao';
import { Tecnologia } from '../tecnologias/class/tecnologia';
import { TecnologiaService } from '../tecnologias/service/tecnologia.service';
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
  tecnologiasSelecionadasParaBusca: number[];

  constructor(
    private projetoService: ProjetosService,
    private tecnologiaService: TecnologiaService, 
    private router: Router) { }

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
      this.tecnologiasSelecionadasParaBusca = new Array<number>(this.tecnologiasParaBusca.length);
  }

  filterItem(value){
    this.projetosCardsFiltered = [...this.projetosCardsExistente,...this.projetosTestesPublicosCards].filter(
      item => {
        if(value){
          let tituloProjetoAsLower = item.tituloProjeto.toLowerCase();
          return tituloProjetoAsLower.includes(value.toLowerCase());
        }
      }
    )
    if(!value){
      this.projetosCardsFiltered = []
    }
  }

  redirect(idEspecificacao: number) : void{
    this.router.navigateByUrl(`projeto/${idEspecificacao}`);
  }

  aoClicarImagemBuscaTecnologia(id: number){
    console.log(id);
    if(this.tecnologiasSelecionadasParaBusca.includes(id)){
      this.tecnologiasSelecionadasParaBusca.splice(this.tecnologiasSelecionadasParaBusca.indexOf(id),1);
    }else{
      this.tecnologiasSelecionadasParaBusca.push(id);
    }
  }

}
