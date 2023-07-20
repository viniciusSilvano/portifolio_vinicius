import { Imagem } from "../comum-classes/classesComuns";
import { Tecnologia } from "../tecnologia-classes/tecnologia";

export interface ProjetoEspecificacao{
    id: number;
    tecnologia: Tecnologia;
    tituloProjeto: string;
    descricao: string;
    imagens: Imagem[];
    tecnologiasAuxiliares?: Tecnologia[];
    tipo: TipoProjeto
    accordionCards: AccordionCard[];  
}

export class AccordionCard{
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