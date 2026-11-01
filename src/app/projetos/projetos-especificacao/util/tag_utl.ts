import { StatusProjeto, TipoProjeto, Visibilidade } from "../class/projeto_especificacao";
import { Tag, TipoTag } from "../class/tag";
import { TagsPorTipoTag } from "../class/tags_por_tipo";



export class TagUtil{

  private static CHAVE_POR_STATUS = 'porStatus';
  private static CHAVE_POR_TIPO = 'porTipo';
  private static CHAVE_POR_VISIBILIDADE = 'porVisibilidade';

  private static allTagsMap = new Map<string,TagsPorTipoTag>([
    [TagUtil.CHAVE_POR_STATUS, new TagsPorTipoTag(TipoTag.STATUS_PROJETO,'status', new Map<number, string>([[StatusProjeto.EM_DESENVOLVIMENTO, "Em desenvolvimento"],[StatusProjeto.FINALIZADO, "Finalizado"],[StatusProjeto.EM_PRODUCAO, "Em produção"]]))],
    [TagUtil.CHAVE_POR_TIPO,new TagsPorTipoTag(TipoTag.TIPO_PROJETO,'tipo', new Map<number, string>([[TipoProjeto.PESSOAIS, 'Projeto Pessoal'],[TipoProjeto.TESTE_PUBLICOS, 'Projeto Público/Teste']]))],
    [TagUtil.CHAVE_POR_VISIBILIDADE,new TagsPorTipoTag(TipoTag.VISIBILIDADE_PROJETO,'visibilidade', new Map<number, string>([[Visibilidade.PUBLICO, 'Código Público'],[Visibilidade.PRIVADO, 'Código Privado']]))]
  ])

  private static todasTags : Tag[] = TagUtil.initTodasTags();

  private static initTodasTags() : Tag[]{
    let listaAlltags: Tag[] = []
    for(let tagPorTipoTag of TagUtil.allTagsMap.values()){
      TagUtil.addTagFromMapToArray(tagPorTipoTag.tags,listaAlltags,tagPorTipoTag.tipoTag,tagPorTipoTag.campoProjeto);
    }

    return listaAlltags;
  }

  private static addTagFromMapToArray(map : Map<number,string>, tags : Tag[],tipoTag : TipoTag,campoProjeto: string){
    map.forEach((value: string, key: number) => {
      let tag = new Tag(key,value,tipoTag,campoProjeto)
      tags.push(tag);
    });
  }

  static retornarNomeTagPorStatus(status: StatusProjeto ) : string | undefined{
    return TagUtil.allTagsMap.get(this.CHAVE_POR_STATUS)?.tags.get(status);
  }

  static retornaNomeTagPorTipoProjeto(tipo: TipoProjeto) : string | undefined{
    return TagUtil.allTagsMap.get(this.CHAVE_POR_TIPO)?.tags.get(tipo);
  }

  static retornaNomeTagPorVisibilidade(visibilidade: Visibilidade) : string | undefined{
    return TagUtil.allTagsMap.get(this.CHAVE_POR_VISIBILIDADE)?.tags.get(visibilidade);
  }

  static retornarTodasAsTags() : Tag[]{
    return TagUtil.todasTags;
  }
}

