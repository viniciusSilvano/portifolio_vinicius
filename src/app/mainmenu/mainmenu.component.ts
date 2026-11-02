import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { ProjetoEspecificacao } from '../projetos/projetos-especificacao/class/projeto_especificacao';
import { Router, RouterLink } from '@angular/router';
import { Location, NgStyle } from '@angular/common';
import { ProjetosService } from '../projetos/service/projetos.service';
import { SocialMediaService } from '../social-media.service';
import { SocialMediaButton } from '../left-aside-column-classes/socialMediaButton';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownButtonItem, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-mainmenu',
    templateUrl: './mainmenu.component.html',
    styleUrls: ['./mainmenu.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownButtonItem, NgbDropdownItem, NgStyle]
})
export class MainmenuComponent implements OnInit {
  private projetoService = inject(ProjetosService);
  private socialMediaService = inject(SocialMediaService);
  private router = inject(Router);
  private location = inject(Location);

  projetosDropDownList? : ProjetoEspecificacao[];
  socialMediaButtons? : SocialMediaButton[];

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
