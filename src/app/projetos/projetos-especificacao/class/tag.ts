import { Obj } from "src/app/comuns/class/classesComuns";

export enum TipoTag{
  TIPO_PROJETO,STATUS_PROJETO
}

export class Tag extends Obj<Tag>{
  id: Number;
  nome: String;
  tipoTag: TipoTag;

  constructor(id: Number, nome: String, tipoTag: TipoTag){
    super();
    this.id = id;
    this.nome = nome;
    this.tipoTag = tipoTag;
  }

  public equals(tag: Tag) : Boolean{
    return tag && tag.id == this.id;
  }
}