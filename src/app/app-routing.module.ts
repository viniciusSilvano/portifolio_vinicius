import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetosEspecificacaoComponent } from "./projetos-especificacao/projetos-especificacao.component";

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/projeto', 
    pathMatch: 'full',
  },
  {
    path: 'projeto', 
    component: ProjetosComponent,
    data:{
      breadcrumb: "projetos"
    }
  },
  {
    path: 'projeto/:idEspecificacao',
    component: ProjetosEspecificacaoComponent,
    data:{
      breadcrumb: "especificação de projeto"
    }
  },
  {path: '**', redirectTo: '/projeto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

