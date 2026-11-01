import { Entidade } from "../../../../src/app/comuns/class/classesComuns";
import { ProjetoEspecificacao } from "../../../../src/app/projetos/projetos-especificacao/class/projeto_especificacao";
import { Tecnologia } from "../../../../src/app/tecnologias/class/tecnologia";

export abstract class AccordionCard implements Entidade{
  id: number;
  tituloDescricao: string;
  descricao: string;
  collapse: Collapse;

  constructor(id:number, tituloDescricao: string, descricao: string, collapse: Collapse){
    this.id = id;
    this.tituloDescricao = tituloDescricao;
    this.descricao = descricao;
    this.collapse = collapse;
  }
}

export class AccordionProjetoCard extends AccordionCard{
  tecnologiasParaBusca: Tecnologia[];
  projetoList: ProjetoEspecificacao[];

  constructor(id:number, tituloDescricao: string, descricao: string, collapse: Collapse,tecnologiasParaBusca : Tecnologia[], projetoList: ProjetoEspecificacao[]){
    super(id,tituloDescricao,descricao,collapse);
    this.tecnologiasParaBusca = tecnologiasParaBusca;
    this.projetoList = projetoList;
  }
}

export enum Collapse{
  COLLAPSED = "collapse",
  NOT_COLLAPSED = "collapse show"
}
