import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { GitComponent } from './git/git.component';
import { LeftAsideColumnComponent } from './left-aside-column/left-aside-column.component';
import { RightAsideColumnComponent } from './right-aside-column/right-aside-column.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { FooterComponent } from './footer/footer.component';
import { ProjetosEspecificacaoComponent } from './projetos-especificacao/projetos-especificacao.component';
import {NgbCarouselModule,NgbModalModule,NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ProjetosCarouselImagensComponent } from './projetos-carousel-imagens/projetos-carousel-imagens.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MainColumnComponent } from './main-column/main-column.component';
import { ProjetosExistentesComponent } from './projetos-existentes/projetos-existentes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    GitComponent,
    LeftAsideColumnComponent,
    RightAsideColumnComponent,
    ProjetosComponent,
    FooterComponent,
    ProjetosEspecificacaoComponent,
    ProjetosCarouselImagensComponent,
    BreadcrumbComponent,
    MainColumnComponent,
    ProjetosExistentesComponent
  ],
  imports: [
    BrowserModule,
    NgbCarouselModule,
    NgbModalModule,
    NgbAlertModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
