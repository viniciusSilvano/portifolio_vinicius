import { versaoWrapper } from './data/projects/controle-despesas/versoes_projeto';
import { Component, OnChanges, OnInit, OnDestroy, ChangeDetectionStrategy, inject, SecurityContext } from '@angular/core';
import {ProjetoEspecificacao} from "./class/projeto_especificacao";
import { ActivatedRoute, Router, NavigationEnd, Event, RouterLink } from "@angular/router";
import {Subscription } from 'rxjs';
import { ProjetosService } from '../service/projetos.service';
import { AccordionCard, Collapse } from '../../../../src/app/comuns/class/accordion-card';
import { ImageSliderComponent } from '../../image-slider/image-slider/image-slider.component';
import { DomSanitizer } from '@angular/platform-browser';
import { AccordionProjetoCardComponent } from '../../accordions/accordion-card/accordion-projeto-card/accordion-projeto-card.component';
import { VersaoWrapper } from './class/versao';


@Component({
    selector: 'app-projetos-especificacao',
    templateUrl: './projetos-especificacao.component.html',
    styleUrls: ['./projetos-especificacao.component.css','../../shared/css/searcheable_tag_shared.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, ImageSliderComponent, AccordionProjetoCardComponent]
})

export class ProjetosEspecificacaoComponent implements OnInit, OnChanges, OnDestroy {
  private projetoService = inject(ProjetosService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public projetoEspecificacao?: ProjetoEspecificacao;
  private routerSubscription? : Subscription;
  public versaoWrapper?: VersaoWrapper;
  private idProjeto = this.route.snapshot.paramMap.get('idEspecificacao');
  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    this._initComponent();
  }

  ngOnChanges(){
    this._initComponent();
  }

  getTituloProjeto() : string{
    if(this.projetoEspecificacao){
      return this.sanitizer.sanitize(SecurityContext.HTML, this.projetoEspecificacao.tituloProjeto) || '' ;
    }else{
      return '';
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.routerSubscription?.unsubscribe();
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
        if(event && event.url){
          let regex = new RegExp("\/projeto\/[0-9]+", "gm");
          if(regex.test(event.url)){
            this.idProjeto = event.url.replace(/\D/g, "");;
            this.initializeData();
          }
        }
      }
    }
    );
  }

  initializeData(){
    this.setProjetoEspecificacao();
  }
  getProjetoEspecificacao() : ProjetoEspecificacao | undefined{
    return this.projetoEspecificacao;
  }

  public alertar(){

  }

  setProjetoEspecificacao() : void{
    if(this.idProjeto){
      const id = +this.idProjeto;
      this.projetoService.getProjetoEspecificaoById(id)
        .subscribe(x => {
          this.projetoEspecificacao = x;
          this.initializeVersaoWrapper(this.projetoEspecificacao);
        },(err: unknown) => console.log("Error",err));
    }

  }

  initializeVersaoWrapper(projetoEspecificao: ProjetoEspecificacao | undefined){
    if(projetoEspecificao){
      this.versaoWrapper = this.projetoService.getVersoesByProjetoEspeficacaoId(projetoEspecificao);
    }
  }

  changeCollapse(idCard : number){
    if(this.projetoEspecificacao && this.projetoEspecificacao.accordionCards.find(x => x.id == idCard)){
      let accordionCard : AccordionCard | undefined;
      accordionCard = this.projetoEspecificacao?.accordionCards.find(x => x.id == idCard);
      if(accordionCard){
        accordionCard.collapse = accordionCard.collapse == Collapse.NOT_COLLAPSED ? Collapse.COLLAPSED : Collapse.NOT_COLLAPSED;
      }
     }
  }

  testClick(numImagem : number) : void{
    alert(numImagem);
  }

  getBack() : void{
    this.router.navigateByUrl('/projeto')
  }

}
