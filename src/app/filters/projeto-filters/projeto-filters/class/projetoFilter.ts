import { ProjetoEspecificacao } from "../../../../../../src/app/projetos/projetos-especificacao/class/projeto_especificacao";
import { getAllTipoTags, Tag, TipoTag } from "../../../../../../src/app/projetos/projetos-especificacao/class/tag";
import { ArraysUtil } from "../../../../../../src/app/util/arrays_util";
import { SearchUtil } from "../../../../../../src/app/util/search_util";
import { StringUtil } from "../../../../../../src/app/util/string-util";

export class ProjetoFilter{
  tituloProjeto?: string | undefined;
  tecnologiasSelecionadasParaBusca?: number[];
  tagsParaFiltrarPorTipoTag : Map<TipoTag,Tag[]> = new Map<TipoTag,Tag[]>();

  private _SEARCH_UTIL: SearchUtil;
  private _ARRAYS_UTIL: ArraysUtil;
  private _STRING_UTIL: StringUtil;

  constructor(searchUtil: SearchUtil,arraysUtil : ArraysUtil,stringUtil: StringUtil ){
    this._SEARCH_UTIL = searchUtil;
    this._ARRAYS_UTIL = arraysUtil;
    this._STRING_UTIL = stringUtil;

    getAllTipoTags().forEach( (tipoTag : TipoTag) => this.tagsParaFiltrarPorTipoTag?.set(tipoTag,[]));
  }

  public isResetNeeded(): Boolean{
    return !this.temQualquerFiltroAcionado();
  }

  public reset(){
    this.tituloProjeto = undefined;
    this.tecnologiasSelecionadasParaBusca = [];
  }

  public filter(projeto: ProjetoEspecificacao): Boolean{
    if(this.tituloProjeto && !this.filterByTituloProjeto(projeto)){
      return false;
    }

    if(!this.tecnologiaEstaVazia() && !this.filterByTecnologiasProjeto(this.tecnologiasSelecionadasParaBusca, projeto)){
      return false;
    }
    return this.filterByAllTags(projeto);
  }

  private filterByAllTags(projeto: ProjetoEspecificacao): Boolean{
    for(const [tipoTag, tagsSelecionadas] of this.tagsParaFiltrarPorTipoTag){
      if(tagsSelecionadas.length === 0){
        continue;
      }

      const corresponde = tagsSelecionadas.some(tag => {
        const valorCampo = projeto[tag.campoProjeto as keyof ProjetoEspecificacao];
        return Array.isArray(valorCampo)
          ? (valorCampo as unknown[]).includes(tag.id)
          : tag.tipoTag === tipoTag && valorCampo === tag.id;
      });

      if(!corresponde){
        return false;
      }
    }

    return true;
  }

  private filterByTituloProjeto(projeto: ProjetoEspecificacao) : Boolean {
    let tituloProjetoAsLower: string = projeto.tituloProjeto.toLowerCase();
    if(this.tituloProjeto){
      return tituloProjetoAsLower.includes(this.tituloProjeto.toLowerCase());
    }
    return false;
  }

  private filterByTecnologiasProjeto(tecnologiasSelecionadasParaBusca: number[] | undefined,projeto: ProjetoEspecificacao): Boolean{

    if(projeto && tecnologiasSelecionadasParaBusca){
      for(var tecnologiaSelecionadasParaBusca of tecnologiasSelecionadasParaBusca){
        if(projeto.tecnologia && tecnologiaSelecionadasParaBusca == projeto.tecnologia.id){
          return true;
        }

        if(this._SEARCH_UTIL.binarySearch(projeto.tecnologiasAuxiliares, {id:tecnologiaSelecionadasParaBusca})){
          return true;
        }
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
    if(this.tecnologiasSelecionadasParaBusca){
      return this._ARRAYS_UTIL.isEmptyValueArray(this.tecnologiasSelecionadasParaBusca);
    }
    return true;
  }

  tagsEstaVazia() : Boolean{
    for(const chaveTag of this.tagsParaFiltrarPorTipoTag.keys()){
      const tags = this.tagsParaFiltrarPorTipoTag.get(chaveTag);
      if(tags && !this._ARRAYS_UTIL.isEmptyValueArray(tags)){
        return false;
      }
    }
    return true;
  }

}
