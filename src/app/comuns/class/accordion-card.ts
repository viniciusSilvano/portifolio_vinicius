import { Entidade } from "src/app/comuns/class/classesComuns";
import { ProjetoEspecificacao } from "src/app/projetos/projetos-especificacao/class/projeto_especificacao";
import { Tecnologia } from "src/app/tecnologias/class/tecnologia";

export abstract class AccordionCard implements Entidade{
  id: Number;
  tituloDescricao: string;
  descricao: string;
  collapse: Collapse;
}

export class AccordionProjetoCard extends AccordionCard{
  tecnologiasParaBusca: Tecnologia[];
  projetoList: ProjetoEspecificacao[];
}

export enum Collapse{
  COLLAPSED = "collapse",
  NOT_COLLAPSED = "collpase show"
}
