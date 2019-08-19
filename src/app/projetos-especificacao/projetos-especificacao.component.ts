import { Component, OnInit } from '@angular/core';
import {ProjetosEspecificacaoService} from "../projetos-especificacao.service";
import {ProjetoEspecificacao, AccordionCard, Collapse} from "../projetos-especificacao-classes/projeto_especificacao";
import {ActivatedRoute, Router, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators"



@Component({
  selector: 'app-projetos-especificacao',
  templateUrl: './projetos-especificacao.component.html',
  styleUrls: ['./projetos-especificacao.component.css']
})

export class ProjetosEspecificacaoComponent implements OnInit {
  public projetoEspecificacao: ProjetoEspecificacao;
  constructor(
    private service: ProjetosEspecificacaoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.setProjetoEspecificacao();
    console.log(this.projetoEspecificacao);
  }

  getProjetoEspecificacao() : ProjetoEspecificacao{
    return this.projetoEspecificacao;
  }

  setProjetoEspecificacao() : void{
    /*const id = +this.route.snapshot.paramMap.get('idEspecificacao');
    this.service.getProjetoEspecificaoById(id)
      .subscribe(x => this.projetoEspecificacao = x
        ,err => console.log("Error",err));*/
       const id = this.route.paramMap.pipe(
          switchMap((params: ParamMap) => 
          this.service.getProjetoEspecificaoById(parseInt(params.get('id'))))
        )

        id.subscribe(x => this.projetoEspecificacao = x, err => console.log("Error",err));
  }

  changeCollapse(idCard : Number){
     let accordionCard : AccordionCard;
     accordionCard = this.projetoEspecificacao.accordionCards.find(x => x.id == idCard);
     accordionCard.collapse = accordionCard.collapse == Collapse.notCollapsed ? Collapse.collapsed : Collapse.notCollapsed;
  }

  testClick(numImagem : Number) : void{
    alert(numImagem);
  }

}
