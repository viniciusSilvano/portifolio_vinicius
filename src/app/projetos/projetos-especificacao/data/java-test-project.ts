import { ProjetoEspecificacao, StatusProjeto, TipoProjeto, Visibilidade } from '../class/projeto_especificacao';
import { GlobalStrings } from '../../../globalStrings/globalString';
import { TECNOLOGIA_ENUM, TECNOLOGIAS } from '../../../tecnologias/data/TECNOLOGIAS_DADOS';
import { SearchUtil } from '../../../util/search_util';
import { Tecnologia } from '../../../tecnologias/class/tecnologia';
import { Collapse } from '../../../comuns/class/accordion-card';
import { PROJETOS, accordionCardsByProject } from './projeto-dados-comuns';
const _SEARCH_UTIL = new SearchUtil();

export const projeto: ProjetoEspecificacao = {
        id: PROJETOS.TESTE_JAVA_PROJECT,
        descricao: "Projeto de testes em JAVA, parceiro do angular tests. Obs: tentei caprichar no código.",
        tipo: TipoProjeto.TESTE_PUBLICOS,
        imagens: [
            {source: GlobalStrings.getAssetUrl("images/projeto-java-teste-project/java_test_project_1.png"),alt:"print código java 1"},
            {source: GlobalStrings.getAssetUrl("images/projeto-java-teste-project/java_test_project_2.png"),alt:"print código java 2"},
            {source: GlobalStrings.getAssetUrl("images/projeto-java-teste-project/java_test_project_3.png"),alt:"print código java 3"}
        ],
        accordionCards: [
            {
                id: accordionCardsByProject[PROJETOS.TESTE_JAVA_PROJECT]?.descricao,
                tituloDescricao: "Sobre o projeto",
                descricao: "<article><p>Projeto utilizado para testes e brincadeiras em java. Apesar do seu objetivo tentei caprichar no código.<p/></article>",
                collapse: Collapse.COLLAPSED
            },
            {
                id: accordionCardsByProject[PROJETOS.TESTE_JAVA_PROJECT]?.ondeEstaOCodigo,
                tituloDescricao: "Onde está o código?",
                descricao: "<a target=\"_blank\" href=\"https://github.com/viniciusSilvano/testesJava\">link para o github</a>",
                collapse: Collapse.COLLAPSED
            }
        ],
        tecnologia: _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.JAVA}) as Tecnologia,
        tituloProjeto: "Java Test Project",
        tecnologiasAuxiliares: [ _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.JAVA}) as Tecnologia],
        status: [StatusProjeto.FINALIZADO],
        visibilidade: Visibilidade.PUBLICO
    };
