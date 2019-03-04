import { Component, OnInit } from '@angular/core';
import {ProjetosService} from "../projetos.service";
import { Tecnologia } from '../projetos-classes/tecnologia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projetosCards : Tecnologia[];
  projetosCardsFiltered: Tecnologia[];
  constructor(private projetoService: ProjetosService, private router: Router) { }

  ngOnInit() {
    this.projetoService.getProjetoCards()
    .subscribe(
        projetos => {
          this.projetosCards = projetos;
          this.projetosCardsFiltered = projetos;
        }
      );
  }

  filterItem(value){
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    this.projetosCardsFiltered = Object.assign([], this.projetosCards).filter(
       item => item.nome.toLowerCase().indexOf(value.toLowerCase())  > -1
    )
  }
  assignCopy(){
    this.projetosCardsFiltered = Object.assign([], this.projetosCards);
  }

  redirect(idTecnologia: number) : void{
    this.router.navigateByUrl(`/projetosExistentes/${idTecnologia}`);
  }

}
