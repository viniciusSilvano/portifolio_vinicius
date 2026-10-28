import { ProjetoEspecificacao, StatusProjeto, TipoProjeto, Visibilidade } from '../../class/projeto_especificacao';
import { GlobalStrings } from '../../../../globalStrings/globalString';
import { TECNOLOGIA_ENUM, TECNOLOGIAS } from '../../../../tecnologias/data/TECNOLOGIAS_DADOS';
import { SearchUtil } from '../../../../util/search_util';
import { Tecnologia } from '../../../../tecnologias/class/tecnologia';
import { Collapse } from '../../../../comuns/class/accordion-card';
import { AccordionSectionId, PROJETOS } from './projeto-dados-comuns';
const _SEARCH_UTIL = new SearchUtil();

export const projeto: ProjetoEspecificacao = {
        id: PROJETOS.ALUGUEIS,
        tituloProjeto:"Alugueis",
        tecnologia: _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: 1}) as Tecnologia,//logo android
        descricao:"sistema mobile de alugueis e controle de estoque feito em JAVA",
        tipo: TipoProjeto.PESSOAIS,
        imagens:[
            {source:GlobalStrings.getAssetUrl("images/projeto-aluguel/main_activity.png"),alt:"Tela principal",title:"Tela principal",descricao:"A tela inicial do sistema mobile."},
            {source:GlobalStrings.getAssetUrl("images/projeto-aluguel/estoque_activity.png"),alt:"Tela de listagem de itens cadastrados",title:"Tela de listagem de itens"},
            {source:GlobalStrings.getAssetUrl("images/projeto-aluguel/estoque_activity_com_popupMenu.png"),alt:"PopUp menu da tela de listagem",title:"PopUp menu da tela de listagem"},
            {source:GlobalStrings.getAssetUrl("images/projeto-aluguel/item_activity.png"),alt:"Tela de cadastro/modificação de itens",title:"Tela de cadastro/modificação de itens"},
            {source:GlobalStrings.getAssetUrl("images/projeto-aluguel/calendarioCustomizado.png"),alt:"Calendário customizado",title:"Calendário customizado",descricao: "Utilizado para o cadastro de aluguel e listagem"},
            {source:GlobalStrings.getAssetUrl("images/projeto-aluguel/calendarioCustomizado2.png"),alt:"Calendário customizado",title:"Calendário customizado",descricao: "Selecionando uma data para cadastrar um aluguel"},
            {source:GlobalStrings.getAssetUrl("images/projeto-aluguel/cadastroAluguel.png"),alt:"Tela de cadastro/modificação de aluguel",title:"Tela de cadastro/modificação de aluguel"},
            {source:GlobalStrings.getAssetUrl("images/projeto-aluguel/ListagemAluguel.png"),alt:"Tela de listagem de alugueis",title:"Tela de listagem de alugueis"},
            {source:GlobalStrings.getAssetUrl("images/projeto-aluguel/ListagemAluguel2.png"),alt:"Tela de listagem de alugueis",title:"Tela de listagem de alugueis"},

        ],
        accordionCards: [
            {
                id: AccordionSectionId.DESCRIPTION,
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
                id: AccordionSectionId.ABOUT,
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
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.ANDROID}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.JAVA}) as Tecnologia
        ],
        status: [StatusProjeto.FINALIZADO],
        visibilidade: Visibilidade.PRIVADO
    };
