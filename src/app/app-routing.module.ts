import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetosEspecificacaoComponent } from "./projetos-especificacao/projetos-especificacao.component";

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/projetos', 
    pathMatch: 'full'
  },
  {
    path: 'projetos', 
    component: ProjetosComponent,
    data:{
      breadcrumb: "projetos"
    }
  },
  {
    path: 'projetoEspecificacao/:idEspecificacao',
    component: ProjetosEspecificacaoComponent,
    data:{
      breadcrumb: "especificação de projeto"
    }
  },
  {path: '**', redirectTo: '/projetos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

