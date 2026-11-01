export interface Imagem{
  source: string;
  alt: string;
  title?: string;
  descricao?:string;
}

export interface imageButton extends Imagem{

}

export interface Entidade{
  id: number;
}

export abstract class Obj<T>{
  abstract equals(obj: T): Boolean;
}
