import { ProjetoEspecificacao } from "src/app/projetos/projetos-especificacao/class/projeto_especificacao";
import { Tag, TipoTag } from "src/app/projetos/projetos-especificacao/class/tag";
import { ArraysUtil } from "src/app/util/arrays_util";
import { SearchUtil } from "src/app/util/search_util";
import { StringUtil } from "src/app/util/string-util";

export class ProjetoFilter{
  tituloProjeto: String;
  tecnologiasSelecionadasParaBusca: number[];
  tagsParaFiltrar : Tag[] = [];

  private _SEARCH_UTIL: SearchUtil;
  private _ARRAYS_UTIL: ArraysUtil;
  private _STRING_UTIL: StringUtil;

  constructor(searchUtil: SearchUtil,arraysUtil : ArraysUtil,stringUtil: StringUtil ){
    this._SEARCH_UTIL = searchUtil;
    this._ARRAYS_UTIL = arraysUtil;
    this._STRING_UTIL = stringUtil;
  }

  public isResetNeeded(): Boolean{
    return !this.temQualquerFiltroAcionado();
  }

  public reset(){
    this.tituloProjeto = undefined;
    this.tecnologiasSelecionadasParaBusca = [];
  }

  public filter(projeto: ProjetoEspecificacao): Boolean{
    let encontrado : Boolean;

    if(this.tituloProjeto){
      encontrado = this.filterByTituloProjeto(projeto);

      if(!encontrado){
        return false;
      }
    }

    if(!this.tecnologiaEstaVazia()){
      encontrado = this.filterByTecnologiasProjeto(this.tecnologiasSelecionadasParaBusca,projeto);
      
      if(!encontrado){
        return false;
      }
    }

    if(this.tagsParaFiltrar.length){
      encontrado = this.filterByTags(projeto,this.tagsParaFiltrar);

      if(!encontrado){
        return false;
      }
    }
    
    return encontrado;
  }

  private filterByTags(projeto: ProjetoEspecificacao, tagsParaFiltrar : Tag[]): Boolean{
    for(let tag of tagsParaFiltrar){
      if(tag.tipoTag == TipoTag.TIPO_PROJETO && tag.id == projeto.tipo){
        return true;
      }

      if(tag.tipoTag == TipoTag.STATUS_PROJETO && projeto.status){
        for(let status of projeto.status){
          if(tag.id == status){
            return true;
          }
        }
      }
    }
    return false;
  }

  private filterByTituloProjeto(projeto: ProjetoEspecificacao) : Boolean {
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

  temQualquerFiltroAcionado(): Boolean{
    return !this._STRING_UTIL.isEmpty(this.tituloProjeto) 
      || !this.tecnologiaEstaVazia()
      || !this.tagsEstaVazia();
  }

  tecnologiaEstaVazia() : Boolean{
    return this._ARRAYS_UTIL.isEmptyValueArray(this.tecnologiasSelecionadasParaBusca);
  }

  tagsEstaVazia() : Boolean{
    return this._ARRAYS_UTIL.isEmptyValueArray(this.tagsParaFiltrar);
  }
  
}