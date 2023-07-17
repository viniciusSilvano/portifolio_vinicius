import { ProjetoEspecificacao,Collapse, TipoProjeto } from "./projeto_especificacao";
import { GlobalStrings } from '../globalStrings/globalString';
import { TECNOLOGIAS } from "../tecnologia-classes/TECNOLOGIAS";
export const PROJETOS_ESPECIFICACOES: ProjetoEspecificacao[] = [
    {
        id:1,
        tituloProjeto:"Alugueis",
        tecnologia: TECNOLOGIAS.filter(x => x.idTecnologia == 1)[0],//logo android
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
            TECNOLOGIAS.filter(x => x.idTecnologia == 8)[0],
            TECNOLOGIAS.filter(x => x.idTecnologia == 1)[0]
        ]
    },
    {
        id:2,
        tituloProjeto:"SGQ(Sistema de Gerenciamento de Questão) - TCC",
        tecnologia: TECNOLOGIAS.filter(x =>  x.idTecnologia == 2)[0], // Spring boot
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
            TECNOLOGIAS.filter(x => x.idTecnologia == 8)[0],
            TECNOLOGIAS.filter(x => x.idTecnologia == 2)[0],
            TECNOLOGIAS.filter(x => x.idTecnologia == 3)[0],
            TECNOLOGIAS.filter(x => x.idTecnologia == 4)[0],
            TECNOLOGIAS.filter(x => x.idTecnologia == 5)[0],
            TECNOLOGIAS.filter(x => x.idTecnologia == 6)[0],
            TECNOLOGIAS.filter(x => x.idTecnologia == 7)[0],
        ],
        accordionCards: [
            {
                id: 1,
                tituloDescricao: "Descrição",
                descricao:
                `
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
            {id: 1, descricao: "<p>Projeto utilizado para testes e brincadeiras em java. Apesar do seu objetivo tentei caprichar no código.<p/>", tituloDescricao: "Sobre o projeto",collapse: Collapse.COLLAPSED},
            {id: 2, descricao: "<a target=\"_blank\" href=\"https://github.com/viniciusSilvano/testesJava\">link para o github</a>", tituloDescricao: "Onde está o código?",collapse: Collapse.COLLAPSED}
        ],
        tecnologia: TECNOLOGIAS.filter(x => x.idTecnologia == 8)[0],
        tituloProjeto: "Java Test Project",
        tecnologiasAuxiliares: [ TECNOLOGIAS.filter(x => x.idTecnologia == 8)[0]]
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
            {id: 1, descricao: "<p>Projeto utilizado para testes e brincadeiras em angular. Apesar do seu objetivo tentei caprichar no código.<p/>", tituloDescricao: "Sobre o projeto",collapse: Collapse.COLLAPSED},
            {id: 2, descricao: "<a target=\"_blank\" href=\"https://github.com/viniciusSilvano/angularDoisMaisTestes\">link para o github</a>", tituloDescricao: "Onde está o código?",collapse: Collapse.COLLAPSED}
        ],
        tecnologia: TECNOLOGIAS.filter(x => x.idTecnologia == 9)[0],
        tituloProjeto: "Angular 2+ Tests Project",
        tecnologiasAuxiliares: [ TECNOLOGIAS.filter(x => x.idTecnologia == 9)[0]]
    }
];