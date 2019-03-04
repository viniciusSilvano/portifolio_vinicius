export interface Tecnologia{
    idTecnologia: number;
    nome: string;
    imagemLocation: string;
    idEspecificacao: number; 
    tecnologiasAuxiliares?: TecnologiaAuxiliar[];
}

export class TecnologiaAuxiliar{
    idTecnologiaAuxiliar: number;
    imagemLocation: string;
}