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
import { MainColumnComponent } from './main-column/main-column.component';
import { ImageSliderModule } from './image-slider/image-slider.module';
import { CustomCardModule } from './custom-card/custom-card.module';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    LeftAsideColumnComponent,
    RightAsideColumnComponent,
    ProjetosComponent,
    FooterComponent,
    ProjetosEspecificacaoComponent,
    MainColumnComponent
  ],
  imports: [
    BrowserModule,
    NgbCarouselModule,
    NgbModalModule,
    NgbAlertModule,
    NgbDropdownModule,
    AppRoutingModule,
    ImageSliderModule,
    CustomCardModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'pt_BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
