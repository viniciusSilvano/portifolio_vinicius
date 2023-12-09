import { ProjetoEspecificacao,Collapse, TipoProjeto, StatusProjeto } from "../class/projeto_especificacao";
import { GlobalStrings } from '../../globalStrings/globalString';
import { TECNOLOGIAS } from "../../tecnologias/data/TECNOLOGIAS_DADOS";
import { SearchUtil } from "../../util/search_util";
import { Tecnologia } from "../../tecnologias/class/tecnologia";

const _SEARCH_UTIL = new SearchUtil();

export const PROJETOS_ESPECIFICACOES: ProjetoEspecificacao[] = [
    {
        id:1,
        tituloProjeto:"Alugueis",
        tecnologia: _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 1}) as Tecnologia,//logo android
        descricao:"sistema mobile de alugueis e controle de estoque",
        tipo: TipoProjeto.PESSOAIS,
        imagens:[
            {source:"../.." +  GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-aluguel/main_activity.png",alt:"Tela principal",title:"Tela principal",descricao:"A tela inicial do sistema mobile."},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-aluguel/estoque_activity.png",alt:"Tela de listagem de itens cadastrados",title:"Tela de listagem de itens"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-aluguel/estoque_activity_com_popupMenu.png",alt:"PopUp menu da tela de listagem",title:"PopUp menu da tela de listagem"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-aluguel/item_activity.png",alt:"Tela de cadastro/modificação de itens",title:"Tela de cadastro/modificação de itens"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-aluguel/calendarioCustomizado.png",alt:"Calendário customizado",title:"Calendário customizado",descricao: "Utilizado para o cadastro de aluguel e listagem"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-aluguel/calendarioCustomizado2.png",alt:"Calendário customizado",title:"Calendário customizado",descricao: "Selecionando uma data para cadastrar um aluguel"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-aluguel/cadastroAluguel.png",alt:"Tela de cadastro/modificação de aluguel",title:"Tela de cadastro/modificação de aluguel"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-aluguel/ListagemAluguel.png",alt:"Tela de listagem de alugueis",title:"Tela de listagem de alugueis"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-aluguel/ListagemAluguel2.png",alt:"Tela de listagem de alugueis",title:"Tela de listagem de alugueis"},
            
        ],
        accordionCards: [
            {
                id: 1,
                tituloDescricao: "Descrição",
                descricao:`
                <article>
                    <p>tempo de desenvolvimento: 156h 25min</p>
                    <h2> O que é?</h2>
                    <p>Aplicativo de alugueis e controle de estoque.</p>
                    <h2>Requisitos</h2>
                    <p>O sistema mobile deve cadastrar itens, com nome, data de entrega, e quantidade.</p>
                    <p>O objetivo desse sistema é: Dar ao usuário o conhecimento de seus alugueis e do estoque de itens que são usados nesses alugueis,
                    para isso ele necessita saber os dias de cada aluguel e a situação que seu estoque se encontra.</p>

                    <h2>Ferramentas utilizadas:</h2>
                    <ul>
                        <li>Microsoft Word 2007.</li>
                        <li>Android Studio 3.3.1.</li>
                        <li>Trello.</li>
                        <li>Azure DevOps + GIT + Metodologia Scrum.</li>
                        <li>Gimp 2 (protótipo de tela e arte, extensão .xcf ).</li>
                        <li>Free Officer 2018.</li>
                        <li>Lucidchart (<a href="https://www.lucidchart.com" target=_blank>https://www.lucidchart.com </a>).</li>
                        <li>JUNIT.</li>
                    </ul>
                    <h2>Documentações utilizadas:</h2>
                    <ul>
                        <li>Diagrama de caso de uso (UC, interação do usuário com o sistema).</li>
                        <li>Especificação de caso de uso (ECU, detalhamentos dos UCs(Casos de uso)).</li>
                        <li>Diagrama de classe(classes/entidades principais do sistema).</li>
                        <li>Documento de requisitos(regras de negócio).</li>
                        <li>Fluxograma (apresenta o fluxo principal do app).</li>
                        <li>Diagrama de estados (representa a mudança de estados da entidade Aluguel).</li>
                    </ul>
                    <h2>Versão do projeto android:</h2>
                    <ul>
                        <li>compileSdkVersion 27</li>
                        <li>minSdkVersion 19</li>
                        <li>targetSdkVersion 27</li>
                    </ul>
                    <h2>Atores:</h2>
                    <ul>
                        <li>Vinícius Silvano Silveira Felipe</li>
                    </ul>
                </article>
                `,
                collapse: Collapse.COLLAPSED
            },
            {
                id: 2,
                tituloDescricao: "Sobre o Projeto",
                descricao:`
                <article>
                    <h2>As Entidades do sistema</h2>
                    <ul>
                        <li>Aluguel: A entidade que representa os alugueis criados pelo usuários, possui uma relação de muitos para muitos com a entidade item.</li>
                        <li>Item: A entidade que representa os itens do aluguel.</li>
                        <li>AluguelItens: A entidade que representa o relacionamento entre aluguel e itens.</li>
                    </ul>
                    <h2>Arquitetura</h2>
                    <p>A arquitetura do projeto é <strong>MVVM</strong> (Model View e View model).</p>
                    <p>Para a persistência de dados foi utilizado a biblioteca Room, que é altamente recomendada pelos desenvolvedores.</p>
                    <h2>Design Patterns (Padrões de Projeto).</h2>
                    <p>Os designers patterns utilizados foram:</p>
                    <ul>
                        <li>Factory</li>
                        <li>Builder</li>
                        <li>Dao</li>
                        <li>Singleton</li>
                    </ul>
                    <h3>Factory</h3>
                    <p>O padrão factory foi utilizado para retornar instâncias dos repositórios das entidades do sistema e
                    ela foi utilizada junto ao padrão <strong>Singleton</strong>, pois, o repository é algo custoso ao sistema e deve ter apenas uma instância de cada.</p>
                    <h3>Builder</h3>
                    <p>
                        As entidades aluguel e item do sistema possuiam atributos opcionais, o que acaba gerando um pouco de confusão,
                        , então eu decidi utilizar o design pattern builder que facilita bastante a leitura do que é opcional e do que é obrigatório na instância dessas entidades.
                    </p>
                    <h2>Dao</h2>
                    <p>
                        É, aparentemente, o padrão mais utilizado para persistência de dados e é utilizado pela biblioteca <strong>ROOM</strong>.
                    </p>
                </article>    
                `,
                collapse: Collapse.COLLAPSED
            }
        ],
        tecnologiasAuxiliares:[
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 1}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 8}) as Tecnologia
        ]
    },
    {
        id:2,
        tituloProjeto:"SGQ(Sistema de Gerenciamento de Questão) - TCC",
        tecnologia:   _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 2}) as Tecnologia, // Spring boot
        tipo: TipoProjeto.PESSOAIS,
        descricao: `meu projeto de conclusão de curso da faculdade.
        Ele serve para o coordenador de um curso de ensino criar provas 
        de forma aleatória com um banco de questões, as questões são organizadas
        por meio da Taxonomia de Bloom.`,
        imagens:[
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/TelaInicial.PNG",alt:"Tela principal"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/TelaInicial2.PNG",alt:"Tela principal"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/TelaInicial3.PNG",alt:"Tela principal"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/TelaInicial4.PNG",alt:"Tela principal"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/CadastrarQuestao.PNG",alt:"Tela de cadastrar questão"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/CadastrarQuestao2.PNG",alt:"Tela de cadastrar questão"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/CadastrarQuestao3.PNG",alt:"Tela de cadastrar questão"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/CadastrarQuestao4.PNG",alt:"Tela de cadastrar questão"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/consultarQuestao.PNG",alt:"Tela de consultar questão"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/consultarQuestao2.PNG",alt:"Tela de consultar questão"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/consultarQuestao3.PNG",alt:"Tela de consultar questão"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/consultarQuestao4.PNG",alt:"Tela de consultar questão"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/cadastrarProfessor.PNG",alt:"Tela de cadastrar professor"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/cadastrarDisciplina.PNG",alt:"Tela de cadastrar disciplina"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/cadastrarProva.PNG",alt:"Tela de cadastrar prova"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/cadastrarProva2.PNG",alt:"Tela de cadastrar prova"},
            {source:"../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-sgq/consultarProva.PNG",alt:"Tela de consultar provas"}
        ],
        tecnologiasAuxiliares:[
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 2}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 3}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 4}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 5}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 6}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 7}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 8}) as Tecnologia
        ],
        accordionCards: [
            {
                id: 1,
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
        ]
    },
    {
        id: 3,
        descricao: "Projeto de testes em java, parceiro do angular tests. Obs: tentei caprichar no código.",
        tipo: TipoProjeto.TESTE_PUBLICOS,
        imagens: [
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-java-teste-project/java_test_project_1.png",alt:"print código java 1"},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-java-teste-project/java_test_project_2.png",alt:"print código java 2"},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-java-teste-project/java_test_project_3.png",alt:"print código java 3"}
        ],
        accordionCards: [
            {
                id: 1, 
                tituloDescricao: "Sobre o projeto",
                descricao: "<article><p>Projeto utilizado para testes e brincadeiras em java. Apesar do seu objetivo tentei caprichar no código.<p/></article>", 
                collapse: Collapse.COLLAPSED
            },
            {
                id: 2, 
                tituloDescricao: "Onde está o código?",
                descricao: "<a target=\"_blank\" href=\"https://github.com/viniciusSilvano/testesJava\">link para o github</a>", 
                collapse: Collapse.COLLAPSED
            }
        ],
        tecnologia: _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 8}) as Tecnologia,
        tituloProjeto: "Java Test Project",
        tecnologiasAuxiliares: [ _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 8}) as Tecnologia]
    },
    {
        id: 4,
        descricao: "Projeto de testes em angular, parceiro do java tests. Obs: tentei caprichar no código.",
        tipo: TipoProjeto.TESTE_PUBLICOS,
        imagens: [
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-angular-2-tests/angular_test_project_1.png",alt:"print código angular 1"},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-angular-2-tests/angular_test_project_2.png",alt:"print código angular 2"},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-angular-2-tests/angular_test_project_3.png",alt:"print código angular 3"}
        ],
        accordionCards: [
            {
                id: 1, 
                tituloDescricao: "Sobre o projeto",
                descricao: "<article><p>Projeto utilizado para testes e brincadeiras em angular. Apesar do seu objetivo tentei caprichar no código.<p/></article>", 
                collapse: Collapse.COLLAPSED
            },
            {
                id: 2, 
                tituloDescricao: "Onde está o código?",
                descricao: "<a target=\"_blank\" href=\"https://github.com/viniciusSilvano/angularDoisMaisTestes\">link para o github</a>", 
                collapse: Collapse.COLLAPSED
            }
        ],
        tecnologia: _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 9}) as Tecnologia,
        tituloProjeto: "Angular 2+ Tests Project",
        tecnologiasAuxiliares: [ _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 9}) as Tecnologia]
    },
    {
        id: 5,
        descricao: "Projeto final do curso de game designer da Seven/Redzero",
        tipo: TipoProjeto.PESSOAIS,
        imagens: [
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-final-redzero/Redzero_tcc_MainMenu.png",alt:"print projeto redzero 1",title: 'Menu principal do jogo'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-final-redzero/Redzero_tcc_MainMenu_audio.png",alt:"print projeto redzero 2",title: 'Menu de áudio no menu principal'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-final-redzero/Redzero_tcc_menu_in_game.png",alt:"print projeto redzero 3",title: 'Menu durante o jogo'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-final-redzero/Redzero_tcc_menu_in_game_pause.png",alt:"print projeto redzero 4",title: 'Menu de áudio durante o jogo'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/projeto-final-redzero/Redzero_tcc_creditos.png",alt:"print projeto redzero 5",title: 'Créditos do projeto'}
        ],
        accordionCards: [
            {
                id: 1, 
                tituloDescricao: "Sobre o projeto",
                descricao: 
                    `
                    <article>
                        <p>Projeto final realizado em grupo na Unity pelo qual fiquei responsável pela codificação do menu<p/>
                        <p>Esse foi um dos primeiros projetos envolvendo programação, em que podia escolher entre arte, design, música e etc. Mas, meu maior interesse era programar, após vê o outro desenvolvedor do projeto fazer o mesmo.</p>
                        <h2>Tecnologias</h2>
                        <ul>
                            <li>Unity 5.2.3f1</li>
                            <li>Linguagem C#</li>
                        </ul>

                        <h2>Equipe</h2>
                        <p>A equipe era composta pelos estudantes do curso na época</p>

                        <p>Segue os integrantes conforme o crédito do projeto (como era um projeto final no tempo da adolecência foi um crédito feito na "brincadeira")</p>

                        <h3>Game Designer</h3> 
                        <ul><li>Camila</li></ul>

                        <h3>3D art</h3>
                        <ul>
                            <li>Guilherme do Boné</li>
                            <li>Guilherme da Toquinha</li>
                            <li>Laura</li>
                        </ul>

                        <h3>2D art</h3>
                        <ul>
                            <li>Amanda</li>
                            <li>Julio</li>
                            <li>Matheus</li>
                        </ul>

                        <h3>Programmers</h3>
                        <ul>
                            <li>
                                Vinícius Silvano
                            </li>
                            <li>
                                Rafael
                            </li>
                        </ul>
                    </article>
                    `, 
                collapse: Collapse.COLLAPSED
            }
        ],
        tecnologia: _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 10}) as Tecnologia,
        tituloProjeto: "Projeto final Redzero",
        tecnologiasAuxiliares: [ 
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 10}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 11}) as Tecnologia
        ]
    },
    {
        id: 6,
        descricao: 'Meu primeiro portifólio da área de T.I. ',
        tipo: TipoProjeto.TESTE_PUBLICOS,
        imagens:[
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/home-v1.0.1-min.png",alt:"print tela inicial da versão 1.0.1 do portifólio",title: 'Antiga Home do portifólio, versão 1.0.1'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/projetos-v1.0.1-min.png",alt:"print tela de projetos da versão 1.0.1 do portifólio",title: 'Tela de projetos do portifólio, versão 1.0.1'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/especificacao-projeto-v1.0.1-min.png",alt:"print tela de especificação do projeto da versão 1.0.1 do portifólio",title: 'Tela de especificação do projeto do portifólio, versão 1.0.1'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/home-v2.0.0-min.png",alt:"print tela inicial da versão 2.0.0 do portifólio",title: 'Antiga Home do portifólio, versão 2.0.0'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/projetos-v2.0.0-min.png",alt:"print tela de projetos da versão 2.0.0 do portifólio",title: 'Tela de projetos do portifólio, versão 2.0.0'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/especificacao-projeto-v2.0.0-min.png",alt:"print tela de especificação do projeto da versão 2.0.0 do portifólio",title: 'Tela de especificação do projeto do portifólio, versão 2.0.0'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/projetos-v2.1.6-min.png",alt:"print tela de projetos da versão 2.1.6 do portifólio",title: 'Tela de projetos do portifólio, versão 2.1.6'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/especificacao-projeto-v2.1.6-min.png",alt:"print tela de especificação do projeto da versão 2.1.6 do portifólio",title: 'Tela de especificação do projeto do portifólio, versão 2.1.6'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/projetos-2.6.0-min.png",alt:"print tela de projetos da versão 2.6.0 do portifólio",title: 'Tela de projetos do portifólio, versão 2.6.0'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/projetos-2.6.0_2-min.png",alt:"print tela de projetos da versão 2.6.0 do portifólio segunda parte",title: 'Segunda parte da tela de projetos do portifólio, versão 2.6.0'},
            {source: "../.." + GlobalStrings.getGlobalUrlFragment() + "/assets/images/portifolio-vinicius/especificacao-projeto-2.6.0-min.png",alt:"print tela de especificação do projeto da versão 2.6.0 do portifólio",title: 'Tela de especificação do projeto do portifólio, versão 2.6.0'}
        ],
        accordionCards: [
            {
                id: 1, 
                tituloDescricao: "Sobre o projeto",
                descricao: 
                    `
                    <article>
                        <h1>Sobre o projeto</h1>
                        <p>Meu primeiro portifólio da área de T.I<p/>
                        <p>O portifólio está em constante evolução do detalhe mais simples ao mais complexo</p>

                        <h2>Tecnologia inicial do projeto</h2>
                        <p>O portifólio utiliza angular 2+ e está com um backend planejado para o futuro utilizando java.</p>
                    </article>

                    `, 
                collapse: Collapse.COLLAPSED
            },
            {
                id: 2, 
                tituloDescricao: "Repositório de código",
                descricao: 
                    `
                    <article>
                        <h1>Repositório de código deste projeto</h1>
                        <a target=\"_blank\" href=\"https://github.com/viniciusSilvano/portifolio_vinicius\">link para o github</a>
                    </article>
                    `, 
                collapse: Collapse.COLLAPSED
            }
        ],
        tecnologia: _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 8}) as Tecnologia,
        tituloProjeto: "Primeiro Portifólio Vinícius",
        tecnologiasAuxiliares: [ _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 8}) as Tecnologia],
        status: [StatusProjeto.EM_DESENVOLVIMENTO]
    }
];