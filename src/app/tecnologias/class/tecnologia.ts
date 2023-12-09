import { Imagem, Entidade } from "../../comuns/class/classesComuns";

export interface Tecnologia extends Entidade{
    id: number;
    nome: string;
    imagem: Imagem;
}
