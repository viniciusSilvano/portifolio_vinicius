export interface Imagem{
  source: String;
  alt: String;
  title?: String;
  descricao?:String;
}

export interface Entidade{
  id: Number;
}

export abstract class Obj<T>{
  abstract equals(obj: T): Boolean; 
}