import { TecnologiaAuxiliar } from "../projetos-classes/tecnologia";

export interface ProjetoEspecificacao{
    id: number;
    idTecnologia: number;
    tituloProjeto: string;
    imagemDaTecnologia: string;
    imagens: imagensDoProjeto[];
    tecnologiasAuxiliares?: TecnologiaAuxiliar[];
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