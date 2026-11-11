import { AccordionCard } from "../../../../../src/app/comuns/class/accordion-card";
import { Imagem, Entidade } from "../../../comuns/class/classesComuns";
import { Tecnologia } from "../../../tecnologias/class/tecnologia";

export interface ProjetoEspecificacao extends Entidade{
    id: number;
    tituloProjeto: string;
    tipo: TipoProjeto

    //serao movidos para versao
    nomeVersao?: string;
    tecnologia?: Tecnologia;
    descricao?: string;
    imagens?: Imagem[];
    tecnologiasAuxiliares?: Tecnologia[];
    accordionCards?: AccordionCard[],
    status?: StatusProjeto[];
    visibilidade?: Visibilidade;
    versoes?: VersaoProjeto[];
}

export interface VersaoProjeto{
   nomeVersao: string;
   versaoAtual: boolean;
   tecnologia: Tecnologia;
   descricao: string;
   imagens?: Imagem[];
   tecnologiasAuxiliares?: Tecnologia[];
   accordionCards: AccordionCard[],
   status: StatusProjeto[];
   visibilidade: Visibilidade;
}

export enum TipoProjeto{
    PESSOAIS,TESTE_PUBLICOS
}

export enum StatusProjeto{
    EM_DESENVOLVIMENTO, FINALIZADO, EM_PRODUCAO
}

export enum Visibilidade{
    PUBLICO,PRIVADO
}
