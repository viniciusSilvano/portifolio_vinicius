import { environment } from "src/environments/environment";


export abstract class GlobalStrings{
    //

   public static getGlobalUrlFragment(): String{
        return environment.url;
   }
}