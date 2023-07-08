import { Component, OnInit } from '@angular/core';
import {ProjetoEspecificacao, AccordionCard, Collapse} from "../projetos-especificacao-classes/projeto_especificacao";
import {ActivatedRoute, Router, NavigationEnd,Event} from "@angular/router";
import {Subscription } from 'rxjs';
import { ProjetosService } from '../projetos.service';


@Component({
  selector: 'app-projetos-especificacao',
  templateUrl: './projetos-especificacao.component.html',
  styleUrls: ['./projetos-especificacao.component.css']
})

export class ProjetosEspecificacaoComponent implements OnInit {
  public projetoEspecificacao: ProjetoEspecificacao;
  private routerSubscription : Subscription;
  constructor(
    private projetoService: ProjetosService,
    private route: ActivatedRoute,
    private router: Router
    ) { 
    

    }
 
  ngOnInit() {

    this.initiateRouterEventSubscription();
    this.initializeData();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.routerSubscription.unsubscribe();
  }

  initiateRouterEventSubscription(){
    //Com o codigo abaixo é detectado qualquer mudança na url em todas as "paginas"
    // do app, portanto, eu criei o metodo ngondestroy para me livrar de algo 
    // ainda desnecessário para as demais "paginas ou views"
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
      // Navigation Ended Successfully.
       console.log(event.url);
       this.initializeData();
      }
    }
    );
  }
  
  initializeData(){
    this.setProjetoEspecificacao();
    this.projetoEspecificacao = this.getProjetoEspecificacao();
  }
  getProjetoEspecificacao() : ProjetoEspecificacao{
    return this.projetoEspecificacao;
  }

  public alertar(){
    console.log("o alerta");
  }

  setProjetoEspecificacao() : void{
    const id = +this.route.snapshot.paramMap.get('idEspecificacao');
    this.projetoService.getProjetoEspecificaoById(id)
      .subscribe(x => {
        this.projetoEspecificacao = x
        ,err => console.log("Error",err)
      });

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
