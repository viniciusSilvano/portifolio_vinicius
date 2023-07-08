export interface Tecnologia{
    idTecnologia: number;
    nome: string;
    imagemLocation: string;
    tecnologiasAuxiliares?: Tecnologia[];
}
