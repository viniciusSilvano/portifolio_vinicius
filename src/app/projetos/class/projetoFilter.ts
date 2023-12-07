import { ProjetoEspecificacao } from "src/app/projetos-especificacao/class/projeto_especificacao";
import { SearchUtil } from "src/app/util/search_util";

export class ProjetoFilter{
  tituloProjeto: String;
  tecnologiasSelecionadasParaBusca: number[];
  private _SEARCH_UTIL = new SearchUtil();

  public isResetNeeded(): Boolean{
    return !this.tituloProjeto 
    && this.tecnologiasSelecionadasParaBusca.length == 0;
  }

  public filter(projeto: ProjetoEspecificacao): Boolean{
    let encontrado : Boolean;

    if(this.tituloProjeto){
      encontrado = this.filterByTituloProjeto(projeto);
      if(!encontrado){
        return false;
      }
    }

    if(this.tecnologiasSelecionadasParaBusca.length > 0){
      encontrado = this.filterByTecnologiasProjeto(this.tecnologiasSelecionadasParaBusca,projeto);
      
      if(!encontrado){
        return false;
      }
    }
    return encontrado;
  }

  private filterByTituloProjeto(projeto: ProjetoEspecificacao) {
    let tituloProjetoAsLower: String = projeto.tituloProjeto.toLowerCase();
    return tituloProjetoAsLower.includes(this.tituloProjeto.toLowerCase());
  }

  private filterByTecnologiasProjeto(tecnologiasSelecionadasParaBusca: number[],projeto: ProjetoEspecificacao): Boolean{
   
    for(var tecnologiaSelecionadasParaBusca of tecnologiasSelecionadasParaBusca){
      if(tecnologiaSelecionadasParaBusca == projeto.tecnologia.id){
        return true;
      }

      if(this._SEARCH_UTIL.binarySearch(projeto.tecnologiasAuxiliares, {id:tecnologiaSelecionadasParaBusca})){
        return true;
      }
    }
    
    return false;
  }
}