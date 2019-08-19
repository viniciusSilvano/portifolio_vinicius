import { Component, OnInit } from '@angular/core';
import { ProjetosEspecificacaoService } from '../projetos-especificacao.service';
import { ProjetoEspecificacao } from '../projetos-especificacao-classes/projeto_especificacao';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  public projetosDropDownList : ProjetoEspecificacao[];
  constructor(private  ProjetosEspecificacaoService) { }

  ngOnInit() {
    this.ProjetosEspecificacaoService
    .getAllProjetosEspecificacoes()
    .subscribe(
      projetos => {
        this.projetosDropDownList = projetos;
      }
    )
  }

}
