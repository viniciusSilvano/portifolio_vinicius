import { Injectable } from '@angular/core';
import { PROJETOS_ESPECIFICACOES  } from "./projetos-especificacao-classes/PROJETOS_ESPECIFICACOES"; 
import {ProjetoEspecificacao} from "./projetos-especificacao-classes/projeto_especificacao";
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjetosExistentesService {

  constructor() { }

  getProjetoEspecificaoByIdTecnologia(projetoEspecificacao: ProjetoEspecificacao | number) : Observable<ProjetoEspecificacao[]>{
    const id = typeof projetoEspecificacao === 'number' ? projetoEspecificacao : projetoEspecificacao.idTecnologia;
    //tentar fazer isso dessa vez com o filter
    const result : ProjetoEspecificacao[] = Object.assign([], PROJETOS_ESPECIFICACOES).filter(x => x.idTecnologia == id);
    return of(result);
  }
}
