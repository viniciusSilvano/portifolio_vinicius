import { ProjetoEspecificacao,Collapse } from "./projeto_especificacao";
export const PROJETOS_ESPECIFICACOES: ProjetoEspecificacao[] = [
    {
        id:1,
        tituloProjeto:"Alugueis",
        idTecnologia:1, // android
        imagemDaTecnologia: "../../portifolioVinicius/assets/images/android-logo.png",//logo android
        imagens:[
            {imageURL:"../../portifolioVinicius/assets/images/projeto-aluguel/main_activity.png",altTexto:"Tela principal",tituloCarousel:"Tela principal",descricaoCarousel:"A tela inicial do sistema mobile."},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-aluguel/estoque_activity.png",altTexto:"Tela de listagem de itens cadastrados",tituloCarousel:"Tela de listagem de itens"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-aluguel/estoque_activity_com_popupMenu.png",altTexto:"PopUp menu da tela de listagem",tituloCarousel:"PopUp menu da tela de listagem"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-aluguel/item_activity.png",altTexto:"Tela de cadastro/modificação de itens",tituloCarousel:"Tela de cadastro/modificação de itens"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-aluguel/calendarioCustomizado.png",altTexto:"Calendário customizado",tituloCarousel:"Calendário customizado",descricaoCarousel: "Utilizado para o cadastro de aluguel e listagem"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-aluguel/calendarioCustomizado2.png",altTexto:"Calendário customizado",tituloCarousel:"Calendário customizado",descricaoCarousel: "Selecionando uma data para cadastrar um aluguel"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-aluguel/cadastroAluguel.png",altTexto:"Tela de cadastro/modificação de aluguel",tituloCarousel:"Tela de cadastro/modificação de aluguel"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-aluguel/ListagemAluguel.png",altTexto:"Tela de listagem de alugueis",tituloCarousel:"Tela de listagem de alugueis"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-aluguel/ListagemAluguel2.png",altTexto:"Tela de listagem de alugueis",tituloCarousel:"Tela de listagem de alugueis"},
            
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
                collapse: Collapse.collapsed
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
                collapse: Collapse.collapsed
            }
        ]
    },
    {
        id:2,
        tituloProjeto:"SGQ(Sistema de Gerenciamento de Questão) - TCC",
        idTecnologia:2, // Spring boot
        imagemDaTecnologia: "../../portifolioVinicius/assets/images/spring-boot-logo.jpg",//logo android
        imagens:[
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/TelaInicial.PNG",altTexto:"Tela principal"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/TelaInicial2.PNG",altTexto:"Tela principal"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/TelaInicial3.PNG",altTexto:"Tela principal"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/TelaInicial4.PNG",altTexto:"Tela principal"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/CadastrarQuestao.PNG",altTexto:"Tela de cadastrar questão"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/CadastrarQuestao2.PNG",altTexto:"Tela de cadastrar questão"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/CadastrarQuestao3.PNG",altTexto:"Tela de cadastrar questão"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/CadastrarQuestao4.PNG",altTexto:"Tela de cadastrar questão"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/consultarQuestao.PNG",altTexto:"Tela de consultar questão"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/consultarQuestao2.PNG",altTexto:"Tela de consultar questão"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/consultarQuestao3.PNG",altTexto:"Tela de consultar questão"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/consultarQuestao4.PNG",altTexto:"Tela de consultar questão"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/cadastrarProfessor.PNG",altTexto:"Tela de cadastrar professor"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/cadastrarDisciplina.PNG",altTexto:"Tela de cadastrar disciplina"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/cadastrarProva.PNG",altTexto:"Tela de cadastrar prova"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/cadastrarProva2.PNG",altTexto:"Tela de cadastrar prova"},
            {imageURL:"../../portifolioVinicius/assets/images/projeto-sgq/consultarProva.PNG",altTexto:"Tela de consultar provas"}
        ],
        tecnologiasAuxiliares:[
            {
                idTecnologiaAuxiliar:1,
                imagemLocation: "../../portifolioVinicius/assets/images/tecnologias-auxiliares/bootstrap-logo.svg"
            },
            {
                idTecnologiaAuxiliar:2,
                imagemLocation: "../../portifolioVinicius/assets/images/tecnologias-auxiliares/logoJquery.gif"
            },
            {
                idTecnologiaAuxiliar:3,
                imagemLocation: "../../portifolioVinicius/assets/images/tecnologias-auxiliares/postgresqlLogo.png"
            },
            {
                idTecnologiaAuxiliar:4,
                imagemLocation: "../../portifolioVinicius/assets/images/tecnologias-auxiliares/tinymceLogo.png"
            },
            {
                idTecnologiaAuxiliar:5,
                imagemLocation: "../../portifolioVinicius/assets/images/tecnologias-auxiliares/thymeleafLogo.png"
            }
        ],
        accordionCards: [
            {
                id: 1,
                tituloDescricao: "Descrição",
                descricao:
                `
                    <p>Esse sistema foi descontinuado</p>
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
                collapse: Collapse.collapsed
            },
            {
                id: 2,
                    tituloDescricao: "Legal mas onde está o código?",
                    descricao:`<h2>Acesse o código pelo meu github</h2>
                    <p>Código em: <a href="https://github.com/viniciusSilvano/codigo_TCC" target=_blank>TCC</a></p>`,
                    collapse: Collapse.collapsed
             }
        ]
    }
];