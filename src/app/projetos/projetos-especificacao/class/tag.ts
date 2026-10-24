import { Obj } from "src/app/comuns/class/classesComuns";

export enum TipoTag{
  TIPO_PROJETO,STATUS_PROJETO,VISIBILIDADE_PROJETO
}

export function getAllTipoTags() : TipoTag[]{
  return Object.values(TipoTag).filter((value): value is TipoTag => typeof value === "number");
}

export class Tag extends Obj<Tag>{
  id: Number;
  nome: String;
  tipoTag: TipoTag;
  campoProjeto: String;

  constructor(id: Number, nome: String, tipoTag: TipoTag,campoProjeto: String){
    super();
    this.id = id;
    this.nome = nome;
    this.tipoTag = tipoTag;
    this.campoProjeto = campoProjeto;
  }

  public equals(tag: Tag) : Boolean{
    return tag && tag.id == this.id;
  }
}
