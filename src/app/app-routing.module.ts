import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetosEspecificacaoComponent } from "./projetos-especificacao/projetos-especificacao.component";
import { ProjetosExistentesComponent } from "./projetos-existentes/projetos-existentes.component";

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
  {
    path: 'projetosExistentes/:idTecnologia',
    component: ProjetosExistentesComponent,
    data:{
      breadcrumb: "projetos existentes"
    }
  },
  {path: '**', redirectTo: '/projetos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

