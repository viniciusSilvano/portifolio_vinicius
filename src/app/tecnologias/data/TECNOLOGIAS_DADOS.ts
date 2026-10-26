import {Tecnologia} from "../class/tecnologia";


export enum TECNOLOGIA_ENUM{
  NONE,ANDROID,SPRING_BOOT,BOOTSTRAP,JQUERY,POSTGRES_SQL,TINYMCE,THYMELEAF,JAVA,ANGULAR,UNITY,C_SHARP,LOMBOK,JUNIT,MOCKITO,APACHE_MAVEN,FLYWAYDB
}

export const TECNOLOGIAS: Tecnologia[] = [
    {
        id: TECNOLOGIA_ENUM.ANDROID,
        nome:"ANDROID"
    },
    {
        id: TECNOLOGIA_ENUM.SPRING_BOOT,
        nome:"SPRING BOOT"
    },
    {
        id: TECNOLOGIA_ENUM.BOOTSTRAP,
        nome:"Bootstrap"
    },
    {
        id: TECNOLOGIA_ENUM.JQUERY,
        nome:"Jquery"
    },
    {
        id: TECNOLOGIA_ENUM.POSTGRES_SQL,
        nome: "PostgreSQL"
    },
    {
        id: TECNOLOGIA_ENUM.TINYMCE,
        nome:"Tinymce"
    },
    {
        id: TECNOLOGIA_ENUM.THYMELEAF,
        nome:"Thymeleaf"
    },
    {
        id: TECNOLOGIA_ENUM.JAVA,
        nome: "Java"
    },
    {
        id: TECNOLOGIA_ENUM.ANGULAR,
        nome: "Angular"
    },
    {
        id: TECNOLOGIA_ENUM.UNITY,
        nome: "Unity"
    },
    {
        id: TECNOLOGIA_ENUM.C_SHARP,
        nome: "C#"
    },
    {
        id: TECNOLOGIA_ENUM.LOMBOK,
        nome: "Lombok"
    },
    {
        id: TECNOLOGIA_ENUM.JUNIT,
        nome: "Junit"
    },
    {
        id: TECNOLOGIA_ENUM.MOCKITO,
        nome: "Mockito"
    },
    {
        id: TECNOLOGIA_ENUM.APACHE_MAVEN,
        nome: "Apache Maven"
    },
    {
        id: TECNOLOGIA_ENUM.FLYWAYDB,
        nome: "FlyWayDb"
    }

]



