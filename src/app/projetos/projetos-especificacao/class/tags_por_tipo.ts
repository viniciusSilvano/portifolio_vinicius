import { TipoTag } from "./tag";

export class TagsPorTipoTag{
  tipoTag : TipoTag;
  tags: Map<Number, String>;
  campoProjeto: String;

  constructor(tipoTag : TipoTag,campoProjeto: String,tags: Map<Number, String>){
    this.tipoTag = tipoTag;
    this.campoProjeto = campoProjeto;
    this.tags = tags;
  }

}
