import { ProjetoEspecificacao } from "src/app/projetos/projetos-especificacao/class/projeto_especificacao";
import { getAllTipoTags, Tag, TipoTag } from "src/app/projetos/projetos-especificacao/class/tag";
import { ArraysUtil } from "src/app/util/arrays_util";
import { SearchUtil } from "src/app/util/search_util";
import { StringUtil } from "src/app/util/string-util";

export class ProjetoFilter{
  tituloProjeto: String;
  tecnologiasSelecionadasParaBusca: number[];
  tagsParaFiltrarPorTipoTag : Map<TipoTag,Tag[]> = new Map<TipoTag,Tag[]>();

  private _SEARCH_UTIL: SearchUtil;
  private _ARRAYS_UTIL: ArraysUtil;
  private _STRING_UTIL: StringUtil;

  constructor(searchUtil: SearchUtil,arraysUtil : ArraysUtil,stringUtil: StringUtil ){
    this._SEARCH_UTIL = searchUtil;
    this._ARRAYS_UTIL = arraysUtil;
    this._STRING_UTIL = stringUtil;

    getAllTipoTags().forEach( tipoTag => this.tagsParaFiltrarPorTipoTag.set(tipoTag,[]));
  }

  public isResetNeeded(): Boolean{
    return !this.temQualquerFiltroAcionado();
  }

  public reset(){
    this.tituloProjeto = undefined;
    this.tecnologiasSelecionadasParaBusca = [];
  }

  public filter(projeto: ProjetoEspecificacao): Boolean{
    let encontrado : Boolean = false;

    if(this.tituloProjeto){
      console.log('filtrando por tipo projeto!!')
      encontrado = this.filterByTituloProjeto(projeto);

      if(!encontrado){
        return false;
      }
    }

    if(!this.tecnologiaEstaVazia()){
      console.log('filtrando por tecnologia!!')
      encontrado = this.filterByTecnologiasProjeto(this.tecnologiasSelecionadasParaBusca,projeto);
      
      if(!encontrado){
        return false;
      }
    }

    if(this.tagsParaFiltrarPorTipoTag.get(TipoTag.STATUS_PROJETO).length > 0
        || this.tagsParaFiltrarPorTipoTag.get(TipoTag.TIPO_PROJETO).length > 0){
      console.log('filtrando por tag!!')
      encontrado = this.filterByTags(projeto);

      if(!encontrado){
        return false;
      }
    }
    
    return encontrado;
  }

  private filterByTags(projeto: ProjetoEspecificacao): Boolean{
    let resultadoTipoProjetoFilter = this.filterByTagsTiposProjeto(projeto);
    let resultadoTipoStatusFilter = this.filterByTagsTipoStatus(projeto);

    return resultadoTipoProjetoFilter && resultadoTipoStatusFilter;
  }

  private filterByTagsTiposProjeto(projeto: ProjetoEspecificacao): Boolean{
    let resultadoTipoProjetoFilter = false;
    if(this.tagsParaFiltrarPorTipoTag.get(TipoTag.TIPO_PROJETO).length > 0){
      let predicateTipoProjeto = (tag: Tag,projeto : ProjetoEspecificacao) => tag.tipoTag == TipoTag.TIPO_PROJETO && tag.id == projeto.tipo;
      for(let tag of this.tagsParaFiltrarPorTipoTag.get(TipoTag.TIPO_PROJETO)){
        resultadoTipoProjetoFilter = predicateTipoProjeto(tag,projeto);
      }
    }else{
      resultadoTipoProjetoFilter = true;
    }
    return resultadoTipoProjetoFilter;
  }

  filterByTagsTipoStatus(projeto: ProjetoEspecificacao): Boolean{
    let resultadoTipoStatusFilter = false;
    if(this.tagsParaFiltrarPorTipoTag.get(TipoTag.STATUS_PROJETO).length > 0){
       let predicateStatus = (tag: Tag,projeto : ProjetoEspecificacao) => {
        for(let status of projeto.status){
          if(tag.id == status){
            return true;
          }
        }
        return false;
      }
      for(let tag of this.tagsParaFiltrarPorTipoTag.get(TipoTag.STATUS_PROJETO)){
        resultadoTipoStatusFilter =  predicateStatus(tag,projeto);
      }
    }else{
      resultadoTipoStatusFilter = true;
    }
    return resultadoTipoStatusFilter;
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
    return this._ARRAYS_UTIL.isEmptyValueArray(this.tagsParaFiltrarPorTipoTag.get(TipoTag.STATUS_PROJETO))
      && this._ARRAYS_UTIL.isEmptyValueArray(this.tagsParaFiltrarPorTipoTag.get(TipoTag.TIPO_PROJETO));
  }
  
}