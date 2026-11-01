import { Imagem, imageButton } from "../comuns/class/classesComuns";

export class SocialMediaButton implements imageButton{
    source: string;
    alt: string;
    title?: string;
    descricao?: string;

    mediaUrl: string;

    constructor(source: string, alt: string, mediaUrl: string){
      this.source = source;
      this.alt = alt;
      this.mediaUrl = mediaUrl;
    }
}
