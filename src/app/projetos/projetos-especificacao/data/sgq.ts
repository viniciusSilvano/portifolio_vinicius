import { ProjetoEspecificacao, StatusProjeto, TipoProjeto, Visibilidade } from '../class/projeto_especificacao';
import { GlobalStrings } from '../../../globalStrings/globalString';
import { TECNOLOGIA_ENUM, TECNOLOGIAS } from '../../../tecnologias/data/TECNOLOGIAS_DADOS';
import { SearchUtil } from '../../../util/search_util';
import { Tecnologia } from '../../../tecnologias/class/tecnologia';
import { Collapse } from '../../../comuns/class/accordion-card';
import { AccordionSectionId, PROJETOS } from './projeto-dados-comuns';
const _SEARCH_UTIL = new SearchUtil();

export const projeto: ProjetoEspecificacao = {
        id: PROJETOS.SGQ_SISTEMA_GERENCIAMENTO_QUESTAO,
        tituloProjeto:"SGQ(Sistema de Gerenciamento de Questão) - TCC",
        tecnologia:   _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.SPRING_BOOT}) as Tecnologia, // Spring boot
        tipo: TipoProjeto.PESSOAIS,
        descricao: `meu projeto de conclusão de curso da faculdade feito com o framework SPRING BOOT.
        Ele serve para o coordenador de um curso de ensino criar provas
        de forma aleatória com um banco de questões, as questões são organizadas
        por meio da Taxonomia de Bloom.`,
        imagens:[
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/TelaInicial.PNG"),alt:"Tela principal"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/TelaInicial2.PNG"),alt:"Tela principal"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/TelaInicial3.PNG"),alt:"Tela principal"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/TelaInicial4.PNG"),alt:"Tela principal"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/CadastrarQuestao.PNG"),alt:"Tela de cadastrar questão"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/CadastrarQuestao2.PNG"),alt:"Tela de cadastrar questão"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/CadastrarQuestao3.PNG"),alt:"Tela de cadastrar questão"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/CadastrarQuestao4.PNG"),alt:"Tela de cadastrar questão"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/consultarQuestao.PNG"),alt:"Tela de consultar questão"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/consultarQuestao2.PNG"),alt:"Tela de consultar questão"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/consultarQuestao3.PNG"),alt:"Tela de consultar questão"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/consultarQuestao4.PNG"),alt:"Tela de consultar questão"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/cadastrarProfessor.PNG"),alt:"Tela de cadastrar professor"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/cadastrarDisciplina.PNG"),alt:"Tela de cadastrar disciplina"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/cadastrarProva.PNG"),alt:"Tela de cadastrar prova"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/cadastrarProva2.PNG"),alt:"Tela de cadastrar prova"},
            {source:GlobalStrings.getAssetUrl("images/projeto-sgq/consultarProva.PNG"),alt:"Tela de consultar provas"}
        ],
        tecnologiasAuxiliares:[
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.SPRING_BOOT}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.BOOTSTRAP}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.JQUERY}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.POSTGRES_SQL}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.TINYMCE}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.THYMELEAF}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.JAVA}) as Tecnologia
        ],
        accordionCards: [
            {
                id: AccordionSectionId.DESCRIPTION,
                tituloDescricao: "Descrição",
                descricao:
                `
                    <article>
                        <h2>O que é?</h2>
                        <p>Esse foi o meu projeto de conclusão de curso da faculdade.
                        Ele serve para o coordenador de um curso de ensino criar provas
                        de forma aleatória com um banco de questões, as questões são organizadas
                        por meio da Taxonomia de Bloom.</p>
                        <p>Os professores eram responsáveis pelo cadastro das questões
                        e o coordenador homologava(dava o aceite) dessas questões para a criação das provas.</p>
                        <h2>Ferramentas utilizadas:</h2>
                        <ul>
                            <li>Microsoft Word 2007.</li>
                            <li>Eclipse</li>
                            <li>Spring boot</li>
                            <li>JQuery</li>
                            <li>Bootstrap 3</li>
                            <li>TinyMCE (Versão gratuita)</li>
                            <li>PostgresSQL</li>
                            <li>Thymeleaf</li>
                        </ul>
                        <h2>Documentações utilizadas:</h2>
                        <ul>
                            <li>Diagrama de caso de uso (UC, interação do usuário com o sistema).</li>
                            <li>Especificação de caso de uso (ECU, detalhamentos dos UCs(Casos de uso)).</li>
                            <li>Diagrama de classe(classes/entidades principais do sistema).</li>
                            <li>Documento de requisitos(regras de negócio).</li>
                            <li>Documento de visão(visão geral do sistema).</li>
                            <li>Documento de regra de negócio.</li>
                            <li>Especificação suplementar.</li>
                        </ul>
                        <h2>Autores</h2>
                        <p>Vinícius Silvano (na parte de criação do sistema, pois o TCC foi feito em dupla)</p>
                    </article>
                `,
                collapse: Collapse.COLLAPSED
            }
        ],
        status: [StatusProjeto.FINALIZADO],
        visibilidade: Visibilidade.PRIVADO
    };
