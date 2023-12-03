import {Tecnologia} from "../class/tecnologia";
import { GlobalStrings } from '../../globalStrings/globalString';

export const TECNOLOGIAS: Tecnologia[] = [
    {
        id:1,
        nome:"ANDROID",
        imagem:{ source: "../.." + GlobalStrings.getGlobalUrlFragment()+ "/assets/images/tecnologias/android-logo.png", alt: 'ANDROID'}
    },
    {
        id:2,
        nome:"SPRING BOOT",
        imagem:{source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/spring-boot-logo.jpg", alt: 'SPRING BOOT'}
    },
    {
        id:3,
        nome:"Bootstrap",
        imagem: {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/bootstrap-logo.svg", alt: 'BOOTSTRAP'}
    },
    {
        id:4,
        nome:"Jquery",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/logoJquery.gif", alt: 'JQUERY'}
    },
    {
        id: 5,
        nome: "PostgreSQL",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/postgresqlLogo.png", alt: 'POSTGRESQL'}
    },
    {
        id:6,
        nome:"Tinymce",
        imagem:{source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/tinymceLogo.png", alt: 'TINYMCE'}
    },
    {
        id: 7,
        nome:"thymeleaf",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/thymeleafLogo.png", alt: 'THYMELEAF'}
    },
    {
        id: 8,
        nome: "Java",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/java_icon.png", alt: 'JAVA'}
    },
    {
        id: 9,
        nome: "Angular",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/angular-icon.png", alt : 'ANGULAR'}
    },
    {
        id: 10,
        nome: "Unity",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/unity.png", alt : 'Unity'}
    },
    {
        id: 11,
        nome: "C#",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/c-sharp.png", alt : 'C#'}
    }
]


