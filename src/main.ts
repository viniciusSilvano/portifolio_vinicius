import { enableProdMode, LOCALE_ID, importProvidersFrom } from '@angular/core';


import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppRoutingModule),
        { provide: LOCALE_ID, useValue: 'pt_BR' }
    ]
})
  .catch(err => console.error(err));
