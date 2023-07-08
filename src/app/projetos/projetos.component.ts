import { Component, OnInit } from '@angular/core';
import {ProjetosService} from "../projetos.service";
import { Router } from '@angular/router';
import { ProjetoEspecificacao } from '../projetos-especificacao-classes/projeto_especificacao';
@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projetosCardsExistente : ProjetoEspecificacao[];
  projetosCardsFiltered: ProjetoEspecificacao[];
  constructor(private projetoService: ProjetosService, private router: Router) { }

  ngOnInit() {
    this.projetoService.getProjetoCards()
    .subscribe(
        projetos => {
          this.projetosCardsExistente = projetos;
          this.projetosCardsFiltered = projetos;
        }
      );
  }

  filterItem(value){
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    this.projetosCardsFiltered = Object.assign([], this.projetosCardsExistente).filter(
      item => item.tituloProjeto.toLowerCase().indexOf(value.toLowerCase())  > -1
    )
  }
  assignCopy(){
    this.projetosCardsFiltered = Object.assign([], this.projetosCardsExistente);
  }

  redirect(idEspecificacao: number) : void{
    this.router.navigateByUrl(`/projetoEspecificacao/${idEspecificacao}`);
  }

}
