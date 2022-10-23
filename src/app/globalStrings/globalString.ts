

export abstract class GlobalStrings{
    //
   private static prodUrl: String = '/portifolioVinicius';
   private static devUrl: String = '/';

   public static getGlobalUrlFragment(): String{
        return GlobalStrings.devUrl;
   }
}