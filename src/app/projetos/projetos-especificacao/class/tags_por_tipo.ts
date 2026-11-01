import { TipoTag } from "./tag";

export class TagsPorTipoTag{
  tipoTag : TipoTag;
  tags: Map<number, string>;
  campoProjeto: string;

  constructor(tipoTag : TipoTag,campoProjeto: string,tags: Map<number, string>){
    this.tipoTag = tipoTag;
    this.campoProjeto = campoProjeto;
    this.tags = tags;
  }

}
