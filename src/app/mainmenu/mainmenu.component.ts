import { Component, OnInit} from '@angular/core';
import { ProjetoEspecificacao } from '../projetos-especificacao-classes/projeto_especificacao';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProjetosService } from '../projetos.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  public projetosDropDownList : ProjetoEspecificacao[];
  constructor(
    private  projetoService : ProjetosService,
    private router: Router,
    private location: Location
    ) { }

  ngOnInit() {
    this.getAllProjetosEspecificacao();
    
  }
  navigateToEspecificacao(id:number) : void{
    console.log("navigate to" + id);
    //console.log(this.router.navigate(['/projetoEspecificacao/',id],));
    this.router.navigate(['/projetoEspecificacao',id],{skipLocationChange: false, replaceUrl: true});
  }
  private getAllProjetosEspecificacao() : void{
    this.projetoService
    .getAllProjetosEspecificacoes()
    .subscribe(
      projetos => {
        this.projetosDropDownList = projetos;
      }
    )
  } 

}
