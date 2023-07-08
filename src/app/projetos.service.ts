import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROJETOS_ESPECIFICACOES } from './projetos-especificacao-classes/PROJETOS_ESPECIFICACOES';
import { ProjetoEspecificacao } from './projetos-especificacao-classes/projeto_especificacao';
;

@Injectable({
  providedIn: 'root'
})
export class ProjetosService{

  constructor() { }

  getProjetoCards(): Observable<ProjetoEspecificacao[]>{
    //tentar fazer isso dessa vez com o filter
    const result : ProjetoEspecificacao[] = Object.assign([], PROJETOS_ESPECIFICACOES);
    return of(result);
  }
}
