import { Imagem, imageButton } from "../comuns/class/classesComuns";

export class SocialMediaButton implements imageButton{
    source: String;
    alt: String;
    title?: String;
    descricao?: String;

    mediaUrl: string;
}