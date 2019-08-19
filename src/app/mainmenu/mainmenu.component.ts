import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProjetosEspecificacaoService } from '../projetos-especificacao.service';
import { ProjetoEspecificacao } from '../projetos-especificacao-classes/projeto_especificacao';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  public projetosDropDownList : ProjetoEspecificacao[];
  constructor(
    private  projetosEspecificacaoService : ProjetosEspecificacaoService,
    private ref: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.getAllProjetosEspecificacao();
    
  }

  private getAllProjetosEspecificacao() : void{
    this.projetosEspecificacaoService
    .getAllProjetosEspecificacoes()
    .subscribe(
      projetos => {
        this.projetosDropDownList = projetos;
      }
    )
  } 

}
