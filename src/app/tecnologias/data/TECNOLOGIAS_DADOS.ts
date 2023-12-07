import {Tecnologia} from "../class/tecnologia";
import { GlobalStrings } from '../../globalStrings/globalString';

export const TECNOLOGIAS: Tecnologia[] = [
    {
        id:1,
        nome:"ANDROID",
        imagem:{ source: "../.." + GlobalStrings.getGlobalUrlFragment()+ "/assets/images/tecnologias/android-logo.png", alt: 'ANDROID'},
        alt: 'Imagem da sigla do Android'
    },
    {
        id:2,
        nome:"SPRING BOOT",
        imagem:{source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/spring-boot-logo.jpg", alt: 'SPRING BOOT'},
        alt: 'Imagem da sigla do Spring Boot'
    },
    {
        id:3,
        nome:"Bootstrap",
        imagem: {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/bootstrap-logo.svg", alt: 'BOOTSTRAP'},
        alt: 'Imagem da sigla do Bootstrap'
    },
    {
        id:4,
        nome:"Jquery",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/logoJquery.gif", alt: 'JQUERY'},
        alt: 'Imagem da sigla do JQuery'
    },
    {
        id: 5,
        nome: "PostgreSQL",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/postgresqlLogo.png", alt: 'POSTGRESQL'},
        alt: 'Imagem da sigla do PostgreSQL'
    },
    {
        id:6,
        nome:"Tinymce",
        imagem:{source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/tinymceLogo.png", alt: 'TINYMCE'},
        alt: 'Imagem da sigla do TinyMCE'
    },
    {
        id: 7,
        nome:"thymeleaf",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/thymeleafLogo.png", alt: 'THYMELEAF'},
        alt: 'Imagem da sigla do Thymeleaf'
    },
    {
        id: 8,
        nome: "Java",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/java_icon.png", alt: 'JAVA'},
        alt: 'Imagem da sigla do Java'
    },
    {
        id: 9,
        nome: "Angular",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/angular-icon.png", alt : 'ANGULAR'},
        alt: 'Imagem da sigla do Angular'
    },
    {
        id: 10,
        nome: "Unity",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/unity.png", alt : 'Unity'},
        alt: 'Imagem da sigla do Unity'
    },
    {
        id: 11,
        nome: "C#",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/c-sharp.png", alt : 'C#'},
        alt: 'Imagem da sigla do C#'
    }
]


