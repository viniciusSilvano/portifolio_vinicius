import {Tecnologia} from "../class/tecnologia";
import { GlobalStrings } from '../../globalStrings/globalString';

export const TECNOLOGIAS: Tecnologia[] = [
    {
        id:1,
        nome:"ANDROID",
        imagem:{ source: "../.." + GlobalStrings.getGlobalUrlFragment()+ "/assets/images/tecnologias/android-logo.png", 
            alt: 'ANDROID'}
    },
    {
        id:2,
        nome:"SPRING BOOT",
        imagem:{source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/spring-boot-logo-min.png", 
            alt: 'SPRING BOOT'}
    },
    {
        id:3,
        nome:"Bootstrap",
        imagem: {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/bootstrap-logo-min.png", 
            alt: 'BOOTSTRAP'}
    },
    {
        id:4,
        nome:"Jquery",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/logoJquery-min.png", 
            alt: 'JQUERY'}
    },
    {
        id: 5,
        nome: "PostgreSQL",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/postgresqlLogo.png", 
            alt: 'POSTGRESQL'}
    },
    {
        id:6,
        nome:"Tinymce",
        imagem:{source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/tinymceLogo.png", 
            alt: 'TINYMCE'}
    },
    {
        id: 7,
        nome:"Thymeleaf",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/thymeleafLogo.png", 
            alt: 'THYMELEAF'}
    },
    {
        id: 8,
        nome: "Java",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/java_icon.png", 
            alt: 'JAVA'}
    },
    {
        id: 9,
        nome: "Angular",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/angular-icon.png", 
            alt : 'ANGULAR'}
    },
    {
        id: 10,
        nome: "Unity",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/unity.png", 
            alt : 'Unity'}
    },
    {
        id: 11,
        nome: "C#",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/c-sharp.png", 
            alt : 'C#'}
    },
    {
        id: 12,
        nome: "Lombok",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/logo_lombok.png", 
            alt : 'Logo Lombok'}
    },
    {
        id: 13,
        nome: "Junit",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/junit_logo-min.png", 
            alt : 'Logo Junit'}
    },
    {
        id: 14,
        nome: "Mockito",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/mockito_logo-min.jpg", 
            alt : 'Logo Mockito'}
    },
    {
        id: 15,
        nome: "Apache Maven",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/apache_maven_logo-min.png", 
            alt : 'Logo Apache Maven'}
    },
    {
        id: 16,
        nome: "FlyWayDb",
        imagem: {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias/flyway-logo-min.png", 
            alt : 'Logo FlyWayDb'}
    }

]


