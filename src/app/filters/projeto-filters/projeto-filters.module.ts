import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoFiltersComponent } from './projeto-filters/projeto-filters.component';



@NgModule({
  declarations: [ProjetoFiltersComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjetoFiltersComponent]
})
export class ProjetoFiltersModule { }
