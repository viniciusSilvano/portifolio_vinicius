import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoFiltersComponent } from './projeto-filters/projeto-filters.component';
import { CustomCardProjetoModule } from 'src/app/custom-card/custom-card-projeto.module';



@NgModule({
  declarations: [ProjetoFiltersComponent],
  imports: [
    CommonModule,
    CustomCardProjetoModule
  ],
  exports: [ProjetoFiltersComponent]
})
export class ProjetoFiltersModule { }
