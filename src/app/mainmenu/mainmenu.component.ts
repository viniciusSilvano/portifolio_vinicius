import { Component, OnInit} from '@angular/core';
import { ProjetoEspecificacao } from '../projetos/projetos-especificacao/class/projeto_especificacao';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProjetosService } from '../projetos/service/projetos.service';
import { SocialMediaService } from '../social-media.service';
import { SocialMediaButton } from '../left-aside-column-classes/socialMediaButton';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  projetosDropDownList : ProjetoEspecificacao[];
  socialMediaButtons : SocialMediaButton[];

  constructor(
    private  projetoService : ProjetosService,
    private socialMediaService : SocialMediaService,
    private router: Router,
    private location: Location
    ) { }

  ngOnInit() {
    this.getAllProjetosEspecificacao();
    this.getAllSocialButtons();
    
  }

  navigateToEspecificacao(id:number) : void{
    this.router.navigate(['/projeto',id],{skipLocationChange: false, replaceUrl: true});
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

  private getAllSocialButtons(){
    this.socialMediaService.getSocialMediaButtons().subscribe(
      result => this.socialMediaButtons = result
    );
  }

}
