import { enableProdMode, provideZoneChangeDetection, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, NgbCarouselModule, NgbAlertModule, NgbDropdownModule, AppRoutingModule),
        { provide: LOCALE_ID, useValue: 'pt_BR' }
    ]
})
  .catch(err => console.error(err));
