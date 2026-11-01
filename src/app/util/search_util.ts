import { Entidade } from "../comuns/class/classesComuns";

export class SearchUtil{
public binarySearch(
  array: Array<Entidade> | undefined,
  eleBusca: Entidade
): Entidade | undefined {
  if(array){
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {

      const metade = Math.floor((inicio + fim) / 2);
      const elemento = array[metade];

      // Garante que o elemento existe
      if (elemento === undefined) {
        break;
      }

      if (elemento.id === eleBusca.id) {
        return elemento;
      }

      if (elemento.id < eleBusca.id) {
        inicio = metade + 1;
      } else {
        fim = metade - 1;
      }
    }

      return undefined;
    }
  }
}
