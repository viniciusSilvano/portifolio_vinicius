import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { LeftAsideColumnComponent } from './left-aside-column/left-aside-column.component';
import { RightAsideColumnComponent } from './right-aside-column/right-aside-column.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { FooterComponent } from './footer/footer.component';
import { ProjetosEspecificacaoComponent } from './projetos-especificacao/projetos-especificacao.component';
import {NgbCarouselModule,NgbModalModule,NgbAlertModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { ProjetosCarouselImagensComponent } from './projetos-carousel-imagens/projetos-carousel-imagens.component';
import { MainColumnComponent } from './main-column/main-column.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    LeftAsideColumnComponent,
    RightAsideColumnComponent,
    ProjetosComponent,
    FooterComponent,
    ProjetosEspecificacaoComponent,
    ProjetosCarouselImagensComponent,
    MainColumnComponent
  ],
  imports: [
    BrowserModule,
    NgbCarouselModule,
    NgbModalModule,
    NgbAlertModule,
    NgbDropdownModule,
    AppRoutingModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'pt_BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
