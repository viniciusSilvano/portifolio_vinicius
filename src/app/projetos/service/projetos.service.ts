import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROJETOS_ESPECIFICACOES } from '../projetos-especificacao/data/PROJETOS_DADOS';
import { ProjetoEspecificacao, TipoProjeto } from '../projetos-especificacao/class/projeto_especificacao';
import { mapa_versao_projeto, VersaoWrapper } from '../projetos-especificacao/class/versao';
import { versaoWrapper } from '../projetos-especificacao/data/projects/controle-despesas/versoes_projeto';

@Service()
export class ProjetosService{

  constructor() {
    mapa_versao_projeto.set(versaoWrapper.idProjeto,versaoWrapper)
  }

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

  getProjetoEspecificaoById(projetoEspecificacao: ProjetoEspecificacao | number) : Observable<ProjetoEspecificacao | undefined>{
    const id = typeof projetoEspecificacao === 'number' ? projetoEspecificacao : projetoEspecificacao.id;
    const result : ProjetoEspecificacao | undefined  = PROJETOS_ESPECIFICACOES.find(x => x.id == id);
    return of(result);
  }

  getAllProjetosEspecificacoes(): Observable<ProjetoEspecificacao[]>{
    return of(PROJETOS_ESPECIFICACOES);
  }

  getVersoesByProjetoEspeficacaoId(projetoEspecificacao: ProjetoEspecificacao | number) : VersaoWrapper | undefined{
    let id: number = typeof projetoEspecificacao === 'number' ? projetoEspecificacao : projetoEspecificacao.id;
    if(mapa_versao_projeto.has(id)){
      return mapa_versao_projeto.get(id);
    }
    return undefined;
  }
}
