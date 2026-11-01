import { ProjetoEspecificacao } from "../../../../../../src/app/projetos/projetos-especificacao/class/projeto_especificacao";
import { getAllTipoTags, Tag, TipoTag } from "../../../../../../src/app/projetos/projetos-especificacao/class/tag";
import { ArraysUtil } from "../../../../../../src/app/util/arrays_util";
import { SearchUtil } from "../../../../../../src/app/util/search_util";
import { StringUtil } from "../../../../../../src/app/util/string-util";

export class ProjetoFilter{
  tituloProjeto?: String | undefined;
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
    if(this.tagsParaFiltrarPorTipoTag !== undefined && this.tagsParaFiltrarPorTipoTag.keys.length > 0){
      for(const chaveTag of this.tagsParaFiltrarPorTipoTag.keys()){
        if(this.tagsParaFiltrarPorTipoTag.get(chaveTag)){
          console.log('filtrando por tag!!')
          encontrado = this.filterByTags(projeto);

          if(!encontrado){
            return false;
          }
        }
      }
    }

    return encontrado;
  }

  private filterByTags(projeto: ProjetoEspecificacao): Boolean{
    return this.filterByAllTags(projeto);
  }

  private filterByAllTags(projeto: ProjetoEspecificacao): Boolean{
    let mapaResultadoFilters:  Map<TipoTag,Boolean> = new Map<TipoTag,Boolean>();
    if(this.tagsParaFiltrarPorTipoTag){
      for(const chaveTag of this.tagsParaFiltrarPorTipoTag.keys()){
        console.log('tagsParaFiltrar: ', JSON.stringify(this.tagsParaFiltrarPorTipoTag.get(chaveTag)), ' chave: ', chaveTag );
        if(this.tagsParaFiltrarPorTipoTag && this.tagsParaFiltrarPorTipoTag.get(chaveTag)){
            mapaResultadoFilters.set(chaveTag,false);
            let predicateAllTags = (tag: Tag,projeto : ProjetoEspecificacao) =>
              {
                const valorCampo = projeto[tag.campoProjeto as keyof ProjetoEspecificacao]
                if(Array.isArray(valorCampo)){
                  for(let campoEnum of valorCampo){
                    if(tag.id == campoEnum){
                      return true;
                    }
                  }
                  return false;
                }else{
                  return tag.tipoTag == chaveTag && tag.id == valorCampo;
                }
              };
              const tags = this.tagsParaFiltrarPorTipoTag.get(chaveTag);
              if(tags){
                for(let tag of tags){
                  mapaResultadoFilters.set(chaveTag,predicateAllTags(tag,projeto));
                }
              }

        }else{
          mapaResultadoFilters.set(chaveTag,true);
        }
      }
    }
    return [...mapaResultadoFilters.values()].every(value => value == true);
  }

  private filterByTituloProjeto(projeto: ProjetoEspecificacao) : Boolean {
    let tituloProjetoAsLower: String = projeto.tituloProjeto.toLowerCase();
    if(this.tituloProjeto){
      return tituloProjetoAsLower.includes(this.tituloProjeto.toLowerCase());
    }
    return false;
  }

  private filterByTecnologiasProjeto(tecnologiasSelecionadasParaBusca: number[] | undefined,projeto: ProjetoEspecificacao): Boolean{

    if(projeto && tecnologiasSelecionadasParaBusca){
      for(var tecnologiaSelecionadasParaBusca of tecnologiasSelecionadasParaBusca){
        if(tecnologiaSelecionadasParaBusca == projeto.tecnologia.id){
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
