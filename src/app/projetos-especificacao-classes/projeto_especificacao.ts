import { Tecnologia } from "../projetos-classes/tecnologia";

export interface ProjetoEspecificacao{
    id: number;
    tecnologia: Tecnologia;
    tituloProjeto: string;
    descricao: string;
    imagens: imagensDoProjeto[];
    tecnologiasAuxiliares?: Tecnologia[];
    tipo: TiposProjetos
    accordionCards: AccordionCard[];  
}

export class AccordionCard{
    id: Number;
    tituloDescricao: string;
    descricao: string;
    collapse: Collapse;
}

export interface imagensDoProjeto{
    source: String;
    alt: String;
    title?: String;
    descricaoCarousel?:String;
}

export enum Collapse{
    collapsed = "collapse",
    notCollapsed = "collpase show"
}

export enum TiposProjetos{
    PESSOAIS,TESTE_PUBLICOS
}