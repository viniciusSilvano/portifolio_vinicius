import { Injectable } from '@angular/core';
import {ProjetoEspecificacao} from "./projetos-especificacao-classes/projeto_especificacao";
import { PROJETOS_ESPECIFICACOES  } from "./projetos-especificacao-classes/PROJETOS_ESPECIFICACOES"; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetosEspecificacaoService {

  constructor() { }

  getProjetoEspecificaoById(projetoEspecificacao: ProjetoEspecificacao | number) : Observable<ProjetoEspecificacao>{
    const id = typeof projetoEspecificacao === 'number' ? projetoEspecificacao : projetoEspecificacao.id;
    const result : ProjetoEspecificacao = PROJETOS_ESPECIFICACOES.find(x => x.id == id);
    return of(result);
  }
}
