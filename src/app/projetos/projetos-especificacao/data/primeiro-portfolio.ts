import { ProjetoEspecificacao, StatusProjeto, TipoProjeto, Visibilidade } from '../class/projeto_especificacao';
import { GlobalStrings } from '../../../globalStrings/globalString';
import { TECNOLOGIA_ENUM, TECNOLOGIAS } from '../../../tecnologias/data/TECNOLOGIAS_DADOS';
import { SearchUtil } from '../../../util/search_util';
import { Tecnologia } from '../../../tecnologias/class/tecnologia';
import { Collapse } from '../../../comuns/class/accordion-card';
import { AccordionSectionId, PROJETOS } from './projeto-dados-comuns';
const _SEARCH_UTIL = new SearchUtil();

export const projeto: ProjetoEspecificacao = {
        id: PROJETOS.MEU_PRIMEIRO_PORTIFOLIO,
        descricao: 'Meu primeiro portifólio da área de T.I. Feito no ANGULAR ',
        tipo: TipoProjeto.PESSOAIS,
        imagens:[
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/home-v1.0.1-min.png"),alt:"print tela inicial da versão 1.0.1 do portifólio",title: 'Antiga Home do portifólio, versão 1.0.1'},
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/projetos-v1.0.1-min.png"),alt:"print tela de projetos da versão 1.0.1 do portifólio",title: 'Tela de projetos do portifólio, versão 1.0.1'},
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/especificacao-projeto-v1.0.1-min.png"),alt:"print tela de especificação do projeto da versão 1.0.1 do portifólio",title: 'Tela de especificação do projeto do portifólio, versão 1.0.1'},
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/home-v2.0.0-min.png"),alt:"print tela inicial da versão 2.0.0 do portifólio",title: 'Antiga Home do portifólio, versão 2.0.0'},
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/projetos-v2.0.0-min.png"),alt:"print tela de projetos da versão 2.0.0 do portifólio",title: 'Tela de projetos do portifólio, versão 2.0.0'},
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/especificacao-projeto-v2.0.0-min.png"),alt:"print tela de especificação do projeto da versão 2.0.0 do portifólio",title: 'Tela de especificação do projeto do portifólio, versão 2.0.0'},
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/projetos-v2.1.6-min.png"),alt:"print tela de projetos da versão 2.1.6 do portifólio",title: 'Tela de projetos do portifólio, versão 2.1.6'},
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/especificacao-projeto-v2.1.6-min.png"),alt:"print tela de especificação do projeto da versão 2.1.6 do portifólio",title: 'Tela de especificação do projeto do portifólio, versão 2.1.6'},
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/projetos-2.6.0-min.png"),alt:"print tela de projetos da versão 2.6.0 do portifólio",title: 'Tela de projetos do portifólio, versão 2.6.0'},
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/projetos-2.6.0_2-min.png"),alt:"print tela de projetos da versão 2.6.0 do portifólio segunda parte",title: 'Segunda parte da tela de projetos do portifólio, versão 2.6.0'},
            {source: GlobalStrings.getAssetUrl("images/portifolio-vinicius/especificacao-projeto-2.6.0-min.png"),alt:"print tela de especificação do projeto da versão 2.6.0 do portifólio",title: 'Tela de especificação do projeto do portifólio, versão 2.6.0'}
        ],
        accordionCards: [
            {
                id: AccordionSectionId.DESCRIPTION,
                tituloDescricao: "Sobre o projeto",
                descricao:
                    `
                    <article>
                        <h2>Sobre o projeto</h2>
                        <p>Meu primeiro portifólio da área de T.I<p/>
                        <p>O portifólio está em constante evolução do detalhe mais simples ao mais complexo</p>

                        <h3>Tecnologia inicial do projeto</h3>
                        <p>O portifólio utiliza angular 2+ e está com um backend planejado para o futuro utilizando java.</p>
                    </article>

                    `,
                collapse: Collapse.COLLAPSED
            },
            {
                id: AccordionSectionId.SOURCE,
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
        tecnologia: _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.ANGULAR}) as Tecnologia,
        tituloProjeto: "Primeiro Portifólio Vinícius",
        tecnologiasAuxiliares: [ _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.ANGULAR}) as Tecnologia],
        status: [StatusProjeto.EM_PRODUCAO],
        visibilidade: Visibilidade.PUBLICO
    };
