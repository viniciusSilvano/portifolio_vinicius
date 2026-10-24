import { StatusProjeto, TipoProjeto, Visibilidade } from "../class/projeto_especificacao";
import { Tag, TipoTag } from "../class/tag";
import { TagsPorTipoTag } from "../class/tags_por_tipo";



export class TagUtil{

  private static CHAVE_POR_STATUS = 'porStatus';
  private static CHAVE_POR_TIPO = 'porTipo';
  private static CHAVE_POR_VISIBILIDADE = 'porVisibilidade';

  private static allTagsMap = new Map<String,TagsPorTipoTag>([
    [TagUtil.CHAVE_POR_STATUS, new TagsPorTipoTag(TipoTag.STATUS_PROJETO,'status', new Map<Number, String>([[StatusProjeto.EM_DESENVOLVIMENTO, "Em desenvolvimento"],[StatusProjeto.FINALIZADO, "Finalizado"],[StatusProjeto.EM_PRODUCAO, "Em produção"]]))],
    [TagUtil.CHAVE_POR_TIPO,new TagsPorTipoTag(TipoTag.TIPO_PROJETO,'tipo', new Map<Number, String>([[TipoProjeto.PESSOAIS, 'Projeto Pessoal'],[TipoProjeto.TESTE_PUBLICOS, 'Projeto Público/Teste']]))],
    [TagUtil.CHAVE_POR_VISIBILIDADE,new TagsPorTipoTag(TipoTag.VISIBILIDADE_PROJETO,'visibilidade', new Map<Number, String>([[Visibilidade.PUBLICO, 'Código Público'],[Visibilidade.PRIVADO, 'Código Privado']]))]
  ])

  private static todasTags : Tag[] = TagUtil.initTodasTags();

  private static initTodasTags() : Tag[]{
    let listaAlltags: Tag[] = []
    for(let tagPorTipoTag of TagUtil.allTagsMap.values()){
      TagUtil.addTagFromMapToArray(tagPorTipoTag.tags,listaAlltags,tagPorTipoTag.tipoTag,tagPorTipoTag.campoProjeto);
    }

    return listaAlltags;
  }

  private static addTagFromMapToArray(map : Map<Number,String>, tags : Tag[],tipoTag : TipoTag,campoProjeto: String){
    map.forEach((value: String, key: Number) => {
      let tag = new Tag(key,value,tipoTag,campoProjeto)
      tags.push(tag);
    });
  }

  static retornarNomeTagPorStatus(status: StatusProjeto ) : String{
    return TagUtil.allTagsMap.get(this.CHAVE_POR_STATUS)?.tags.get(status);
  }

  static retornaNomeTagPorTipoProjeto(tipo: TipoProjeto) : String{
    return TagUtil.allTagsMap.get(this.CHAVE_POR_TIPO)?.tags.get(tipo);
  }

  static retornaNomeTagPorVisibilidade(visibilidade: Visibilidade) : String{
    return TagUtil.allTagsMap.get(this.CHAVE_POR_VISIBILIDADE)?.tags.get(visibilidade);
  }

  static retornarTodasAsTags() : Tag[]{
    return TagUtil.todasTags;
  }
}

