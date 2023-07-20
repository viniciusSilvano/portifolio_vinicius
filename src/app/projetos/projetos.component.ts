import { Component, OnInit } from '@angular/core';
import {ProjetosService} from "../projetos.service";
import { Router } from '@angular/router';
import { ProjetoEspecificacao } from '../projetos-classes/projeto_especificacao';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projetosCardsExistente : ProjetoEspecificacao[];
  projetosTestesPublicosCards: ProjetoEspecificacao[];
  projetosCardsFiltered: ProjetoEspecificacao[] = [];
  constructor(private projetoService: ProjetosService, private router: Router) { }

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

}
