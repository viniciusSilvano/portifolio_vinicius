import { Imagem, Entidade } from "../../comuns/class/classesComuns";
import { Tecnologia } from "../../tecnologias/class/tecnologia";

export interface ProjetoEspecificacao extends Entidade{
    id: number;
    tecnologia: Tecnologia;
    tituloProjeto: string;
    descricao: string;
    imagens?: Imagem[];
    tecnologiasAuxiliares?: Tecnologia[];
    tipo: TipoProjeto
    accordionCards: AccordionCard[];  
}

export class AccordionCard implements Entidade{
    id: Number;
    tituloDescricao: string;
    descricao: string;
    collapse: Collapse;
}

export enum Collapse{
    COLLAPSED = "collapse",
    NOT_COLLAPSED = "collpase show"
}

export enum TipoProjeto{
    PESSOAIS,TESTE_PUBLICOS
}