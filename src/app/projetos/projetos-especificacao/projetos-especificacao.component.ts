import { Component, OnChanges, OnInit } from '@angular/core';
import {ProjetoEspecificacao} from "./class/projeto_especificacao";
import {ActivatedRoute, Router, NavigationEnd,Event} from "@angular/router";
import {Subscription } from 'rxjs';
import { ProjetosService } from '../service/projetos.service';
import { AccordionCard, Collapse } from 'src/app/comuns/class/accordion-card';


@Component({
  selector: 'app-projetos-especificacao',
  templateUrl: './projetos-especificacao.component.html',
  styleUrls: ['./projetos-especificacao.component.css']
})

export class ProjetosEspecificacaoComponent implements OnInit, OnChanges {
  public projetoEspecificacao: ProjetoEspecificacao;
  private routerSubscription : Subscription;
  private idProjeto = this.route.snapshot.paramMap.get('idEspecificacao');
  constructor(
    private projetoService: ProjetosService,
    private route: ActivatedRoute,
    private router: Router
    ) { 
    

    }
 
  ngOnInit() {
    this._initComponent();
  }

  ngOnChanges(){
    this._initComponent();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.routerSubscription.unsubscribe();
  }

  _initComponent(){
    this.initiateRouterEventSubscription();
    this.initializeData();
  }

  initiateRouterEventSubscription(){
    //Com o codigo abaixo é detectado qualquer mudança na url em todas as "paginas"
    // do app, portanto, eu criei o metodo ngondestroy para me livrar de algo 
    // ainda desnecessário para as demais "paginas ou views"
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
      // Navigation Ended Successfully.
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
    
  }

  setProjetoEspecificacao() : void{
    const id = +this.idProjeto;
    this.projetoService.getProjetoEspecificaoById(id)
      .subscribe(x => {
        this.projetoEspecificacao = x
        ,err => console.log("Error",err)
      });

  }

  changeCollapse(idCard : Number){
     let accordionCard : AccordionCard;
     accordionCard = this.projetoEspecificacao.accordionCards.find(x => x.id == idCard);
     accordionCard.collapse = accordionCard.collapse == Collapse.NOT_COLLAPSED ? Collapse.COLLAPSED : Collapse.NOT_COLLAPSED;
  }

  testClick(numImagem : Number) : void{
    alert(numImagem);
  }

  getBack() : void{
    this.router.navigateByUrl('/projeto')
  }

}
