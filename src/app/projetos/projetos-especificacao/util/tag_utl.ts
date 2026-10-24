import { StatusProjeto, TipoProjeto, Visibilidade } from "../class/projeto_especificacao";
import { Tag, TipoTag } from "../class/tag";



export class TagUtil{

  private static tagsPorStatus = new Map<Number, String>([
    [StatusProjeto.EM_DESENVOLVIMENTO, "Em desenvolvimento"],
    [StatusProjeto.FINALIZADO, "Finalizado"]
  ]);

  private static tagsPorTipo = new Map<Number, String>([
    [TipoProjeto.PESSOAIS, 'Projeto Pessoal'],
    [TipoProjeto.TESTE_PUBLICOS, 'Projeto Público/Teste']
  ]);

   private static tagsPorVisibilidade = new Map<Number, String>([
    [Visibilidade.PUBLICO, 'Código Público'],
    [Visibilidade.PRIVADO, 'Código Privado']
  ]);

  private static todasTags : Tag[] = TagUtil.initTodasTags();

  private static initTodasTags() : Tag[]{
    let tags: Tag[] = []

    TagUtil.addTagFromMapToArray(TagUtil.tagsPorStatus,tags,TipoTag.STATUS_PROJETO,'status');
    TagUtil.addTagFromMapToArray(TagUtil.tagsPorTipo,tags,TipoTag.TIPO_PROJETO,'tipo');
    TagUtil.addTagFromMapToArray(TagUtil.tagsPorVisibilidade,tags,TipoTag.VISIBILIDADE_PROJETO,'visibilidade');

    return tags;
  }

  private static addTagFromMapToArray(map : Map<Number,String>, tags : Tag[],tipoTag : TipoTag,campoProjeto: String){
    map.forEach((value: String, key: Number) => {
      let tag = new Tag(key,value,tipoTag,campoProjeto)
      tags.push(tag);
    });
  }

  static retornarNomeTagPorStatus(status: StatusProjeto ) : String{
    return TagUtil.tagsPorStatus.get(status);
  }

  static retornaNomeTagPorTipoProjeto(tipo: TipoProjeto) : String{
    return TagUtil.tagsPorTipo.get(tipo);
  }

  static retornaNomeTagPorVisibilidade(visibilidade: Visibilidade) : String{
    return TagUtil.tagsPorVisibilidade.get(visibilidade);
  }

  static retornarTodasAsTags() : Tag[]{
    return TagUtil.todasTags;
  }
}

