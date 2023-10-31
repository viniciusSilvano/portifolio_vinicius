import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROJETOS_ESPECIFICACOES } from './projetos-dados/PROJETOS_DADOS';
import { ProjetoEspecificacao, TipoProjeto } from './projetos-classes/projeto_especificacao';
;

@Injectable({
  providedIn: 'root'
})
export class ProjetosService{

  constructor() { }

  getAllProjetoCards(): Observable<ProjetoEspecificacao[]>{
    const result : ProjetoEspecificacao[] = Object.assign([], PROJETOS_ESPECIFICACOES);
    return of(result);
  }

  getProjetoPessoaisCards(): Observable<ProjetoEspecificacao[]>{
    //tentar fazer isso dessa vez com o filter
    const result : ProjetoEspecificacao[] = Object.assign([], PROJETOS_ESPECIFICACOES.filter(x => x.tipo == TipoProjeto.PESSOAIS));
    return of(result);
  }

  getProjetoTestesPublicosCards(): Observable<ProjetoEspecificacao[]>{
    const result : ProjetoEspecificacao[] = Object.assign([], PROJETOS_ESPECIFICACOES.filter(x => x.tipo == TipoProjeto.TESTE_PUBLICOS));
    return of(result);
  }

  getProjetoEspecificaoById(projetoEspecificacao: ProjetoEspecificacao | number) : Observable<ProjetoEspecificacao>{
    const id = typeof projetoEspecificacao === 'number' ? projetoEspecificacao : projetoEspecificacao.id;
    const result : ProjetoEspecificacao = PROJETOS_ESPECIFICACOES.find(x => x.id == id);
    return of(result);
  }

  getAllProjetosEspecificacoes(): Observable<ProjetoEspecificacao[]>{
    return of(PROJETOS_ESPECIFICACOES);
  }
}
