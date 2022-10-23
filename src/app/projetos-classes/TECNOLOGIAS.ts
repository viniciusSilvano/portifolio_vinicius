import {Tecnologia} from "./tecnologia";
import { GlobalStrings } from '../globalStrings/globalString';

export const TECNOLOGIAS: Tecnologia[] = [
    {
        idTecnologia:1,
        nome:"ANDROID",
        imagemLocation:"../.." + GlobalStrings.getGlobalUrlFragment()+ "/assets/images/android-logo.png",
        idEspecificacao:1,
    },
    {
        idTecnologia:2,
        nome:"SPRING BOOT",
       // imagemLocation:"../../portifolio_vinicius/assets/images/spring-boot-logo.jpg",
        imagemLocation:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/spring-boot-logo.jpg",
        idEspecificacao:2
    }
]


