import { ProjetoEspecificacao, StatusProjeto, TipoProjeto, Visibilidade } from '../class/projeto_especificacao';
import { GlobalStrings } from '../../../globalStrings/globalString';
import { TECNOLOGIA_ENUM, TECNOLOGIAS } from '../../../tecnologias/data/TECNOLOGIAS_DADOS';
import { SearchUtil } from '../../../util/search_util';
import { Tecnologia } from '../../../tecnologias/class/tecnologia';
import { Collapse } from '../../../comuns/class/accordion-card';
import { AccordionSectionId, PROJETOS } from './projeto-dados-comuns';
const _SEARCH_UTIL = new SearchUtil();

export const projeto: ProjetoEspecificacao = {
        id: PROJETOS.RED_ZERO_TCC,
        descricao: "Projeto final do curso de game designer da Seven/Redzero feito no framework UNITY",
        tipo: TipoProjeto.PESSOAIS,
        imagens: [
            {source: GlobalStrings.getAssetUrl("images/projeto-final-redzero/Redzero_tcc_MainMenu.png"),alt:"print projeto redzero 1",title: 'Menu principal do jogo'},
            {source: GlobalStrings.getAssetUrl("images/projeto-final-redzero/Redzero_tcc_MainMenu_audio.png"),alt:"print projeto redzero 2",title: 'Menu de áudio no menu principal'},
            {source: GlobalStrings.getAssetUrl("images/projeto-final-redzero/Redzero_tcc_menu_in_game.png"),alt:"print projeto redzero 3",title: 'Menu durante o jogo'},
            {source: GlobalStrings.getAssetUrl("images/projeto-final-redzero/Redzero_tcc_menu_in_game_pause.png"),alt:"print projeto redzero 4",title: 'Menu de áudio durante o jogo'},
            {source: GlobalStrings.getAssetUrl("images/projeto-final-redzero/Redzero_tcc_creditos.png"),alt:"print projeto redzero 5",title: 'Créditos do projeto'}
        ],
        accordionCards: [
            {
                id: AccordionSectionId.DESCRIPTION,
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
        tecnologia: _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.UNITY}) as Tecnologia,
        tituloProjeto: "Projeto final Redzero",
        tecnologiasAuxiliares: [
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.UNITY}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.C_SHARP}) as Tecnologia
        ],
        status: [StatusProjeto.FINALIZADO],
        visibilidade: Visibilidade.PRIVADO
    };
