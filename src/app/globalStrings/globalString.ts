import { environment } from "src/environments/environment";

export abstract class GlobalStrings {
  public static getGlobalUrlFragment(): string {
    return environment.url;
  }

  public static getAssetUrl(assetPath: string): string {
    const appBasePath = environment.url.replace(/\/+$/, '');
    const normalizedAssetPath = assetPath.replace(/^\/+/, '');
    return `${appBasePath}/assets/${normalizedAssetPath}`;
  }
}