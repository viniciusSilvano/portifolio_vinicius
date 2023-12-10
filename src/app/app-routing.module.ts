import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos/projetos.component';
import { ProjetosEspecificacaoComponent } from "./projetos/projetos-especificacao/projetos-especificacao.component";

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/projeto', 
    pathMatch: 'full',
  },
  {
    path: 'projeto', 
    component: ProjetosComponent
  },
  {
    path: 'projeto/:idEspecificacao',
    component: ProjetosEspecificacaoComponent
  },
  {path: '**', redirectTo: '/projeto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

