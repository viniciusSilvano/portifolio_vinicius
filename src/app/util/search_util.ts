import { Entidade } from "../comum-classes/classesComuns";

export class SearchUtil{
  public binarySearch(array: Array<Entidade>,eleBusca : Entidade) : Entidade{
    let inicio=0, fim= array.length-1;
         
    // Iterate while start not meets end
    while (inicio<=fim){
 
        // Find the mid index
        let metade=Math.floor((inicio + fim)/2);
  
        // If element is present at mid, return True
        if (array[metade].id === eleBusca.id) return array[metade];
 
        // Else look in left or right half accordingly
        else if (array[metade].id < eleBusca.id) 
             inicio = metade + 1;
        else
             fim = metade - 1;
    }
  
    return undefined;
  }
}