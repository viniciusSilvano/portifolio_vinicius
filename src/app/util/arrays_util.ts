export class ArraysUtil{
  public isEmptyValueArray(array: Array<any>) : Boolean{
    let isEmptyArray: Boolean = true;
    if(array){
      for(let i = 0;  i < array.length; i++){
        if(array[i]){
          isEmptyArray = false;
          break;
        }
      }
    }
    return isEmptyArray;
  }
}