import {Tecnologia} from "./tecnologia";
import { GlobalStrings } from '../globalStrings/globalString';

export const TECNOLOGIAS: Tecnologia[] = [
    {
        idTecnologia:1,
        nome:"ANDROID",
        imagem:{ source: "../.." + GlobalStrings.getGlobalUrlFragment()+ "/assets/images/tecnologias/android-logo.png", alt: 'ANDROID'}
    },
    {
        idTecnologia:2,
        nome:"SPRING BOOT",
        imagem:{source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/spring-boot-logo.jpg", alt: 'SPRING BOOT'}
    },
    {
        idTecnologia:3,
        nome:"Bootstrap",
        imagem: {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/bootstrap-logo.svg", alt: 'BOOTSTRAP'}
    },
    {
        idTecnologia:4,
        nome:"Jquery",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/logoJquery.gif", alt: 'JQUERY'}
    },
    {
        idTecnologia: 5,
        nome: "PostgreSQL",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/postgresqlLogo.png", alt: 'POSTGRESQL'}
    },
    {
        idTecnologia:6,
        nome:"Tinymce",
        imagem:{source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/tinymceLogo.png", alt: 'TINYMCE'}
    },
    {
        idTecnologia: 7,
        nome:"thymeleaf",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/thymeleafLogo.png", alt: 'THYMELEAF'}
    },
    {
        idTecnologia: 8,
        nome: "Java",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/java_icon.png", alt: 'JAVA'}
    },
    {
        idTecnologia: 9,
        nome: "Angular",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/angular-icon.png", alt : 'ANGULAR'}
    }
]


