

export abstract class GlobalStrings{
    //
   private static prodUrl: String = '/portifolio_vinicius';
   private static devUrl: String = '/';

   public static getGlobalUrlFragment(): String{
        return GlobalStrings.devUrl;
   }
}