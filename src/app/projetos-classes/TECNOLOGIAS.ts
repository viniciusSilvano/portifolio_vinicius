import {Tecnologia} from "./tecnologia";
import { GlobalStrings } from '../globalStrings/globalString';

export const TECNOLOGIAS: Tecnologia[] = [
    {
        idTecnologia:1,
        nome:"ANDROID",
        imagemLocation:"../.." + GlobalStrings.getGlobalUrlFragment()+ "/assets/images/android-logo.png"
    },
    {
        idTecnologia:2,
        nome:"SPRING BOOT",
        imagemLocation:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/spring-boot-logo.jpg"
    },
    {
        idTecnologia:3,
        nome:"Bootstrap",
        imagemLocation: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias-auxiliares/bootstrap-logo.svg",

    },
    {
        idTecnologia:4,
        nome:"Jquery",
        imagemLocation: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias-auxiliares/logoJquery.gif"
    },
    {
        idTecnologia: 5,
        nome: "PostgreSQL",
        imagemLocation: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias-auxiliares/postgresqlLogo.png"
    },
    {
        idTecnologia:6,
        nome:"Tinymce",
        imagemLocation: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias-auxiliares/tinymceLogo.png"
    },
    {
        idTecnologia: 7,
        nome:"thymeleaf",
        imagemLocation: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/tecnologias-auxiliares/thymeleafLogo.png"
    }
]


