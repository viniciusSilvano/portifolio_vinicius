import { Imagem, Entidade } from "../comum-classes/classesComuns";

export interface Tecnologia extends Entidade{
    id: number;
    nome: string;
    imagem: Imagem;
}
