import { AccordionCard } from "src/app/comuns/class/accordion-card";
import { Imagem, Entidade } from "../../../comuns/class/classesComuns";
import { Tecnologia } from "../../../tecnologias/class/tecnologia";

export interface ProjetoEspecificacao extends Entidade{
    id: number;
    tecnologia: Tecnologia;
    tituloProjeto: string;
    descricao: string;
    imagens?: Imagem[];
    tecnologiasAuxiliares?: Tecnologia[];
    tipo: TipoProjeto
    accordionCards: AccordionCard[],
    status?: StatusProjeto[];  
}

export enum TipoProjeto{
    PESSOAIS,TESTE_PUBLICOS
}

export enum StatusProjeto{
    EM_DESENVOLVIMENTO = 'EM DESENVOLVIMENTO'
}