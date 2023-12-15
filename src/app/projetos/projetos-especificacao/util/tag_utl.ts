import { StatusProjeto, TipoProjeto } from "../class/projeto_especificacao";
import { Tag, TipoTag } from "../class/tag";



export class TagUtil{

  private static tagsPorStatus = new Map<Number, String>([
    [0, "Desenvolvimento"]
  ]);

  private static tagsPorTipo = new Map<Number, String>([
    [0, 'Projeto Pessoal'],
    [1, 'Projeto Público/Teste']
  ]);

  private static todasTags : Tag[] = TagUtil.initTodasTags();

  private static initTodasTags() : Tag[]{
    let tags: Tag[] = []

    TagUtil.addTagFromMapToArray(TagUtil.tagsPorStatus,tags,TipoTag.STATUS_PROJETO);
    TagUtil.addTagFromMapToArray(TagUtil.tagsPorTipo,tags,TipoTag.TIPO_PROJETO);

    return tags;
  }

  private static addTagFromMapToArray(map : Map<Number,String>, tags : Tag[],tipoTag : TipoTag){
    map.forEach((value: String, key: Number) => {
      let tag = new Tag(key,value,tipoTag)
      tags.push(tag);
    });
  }

  static retornarNomeTagPorStatus(status: StatusProjeto ) : String{
    return TagUtil.tagsPorStatus.get(status);
  }

  static retornaNomeTagPorTipoProjeto(tipo: TipoProjeto) : String{
    return TagUtil.tagsPorTipo.get(tipo);
  }

  static retornarTodasAsTags() : Tag[]{
    return TagUtil.todasTags;
  }
}

