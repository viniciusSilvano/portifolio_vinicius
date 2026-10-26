import { ProjetoEspecificacao, StatusProjeto, TipoProjeto, Visibilidade } from '../class/projeto_especificacao';
import { GlobalStrings } from '../../../globalStrings/globalString';
import { TECNOLOGIA_ENUM, TECNOLOGIAS } from '../../../tecnologias/data/TECNOLOGIAS_DADOS';
import { SearchUtil } from '../../../util/search_util';
import { Tecnologia } from '../../../tecnologias/class/tecnologia';
import { Collapse } from '../../../comuns/class/accordion-card';
import { PROJETOS, accordionCardsByProject } from './projeto-dados-comuns';
const _SEARCH_UTIL = new SearchUtil();

export const projeto: ProjetoEspecificacao = {
        id: PROJETOS.CONTROLE_DESPESAS,
        descricao: 'Meu projeto para controle de despesas pessoais, feito no SPRING BOOT',
        tipo: TipoProjeto.PESSOAIS,
        imagens:[
            {source: GlobalStrings.getAssetUrl("images/controlador-despesa/tela_cadastro_categoria_despesa-min.png"),alt:"print da tela de cadastro de categoria da despesa.",title: 'tela de cadastro da categoria da despesa'},
            {source: GlobalStrings.getAssetUrl("images/controlador-despesa/tela_cadastro_despesa-min.png"),alt:"print da tela para selecionar o tipo de despesa para cadastro",title: 'tela de seleção de tipo de despesa a cadastrar'},
            {source: GlobalStrings.getAssetUrl("images/controlador-despesa/tela_cadastro_despesa_unica-min.png"),alt:"print da tela de cadastro de despesa do tipo \"Única\"",title: 'tela de cadastro de despesa Única'}
        ],
        accordionCards: [
            {
                id: accordionCardsByProject[PROJETOS.CONTROLE_DESPESAS]?.descricao,
                tituloDescricao: "Sobre o projeto",
                descricao:
                    `
                    <article>
                        <h2>Sobre o projeto</h2>
                        <p>Um projeto pensado para controle de despesas e rendimento, queria ter algo simples para o controle e ao mesmo tempo agregar a minha profissão, por esse motivo decidi criar esse aplicativo web<p/>
                        <p>Sua estrutura é baseada em um curso de educação financeira da Udemy.</p>
                        <p>O Projeto utiliza as seguintes tecnologias:</p>

                        <ul>
                            <li>Spring boot</li>
                            <li>Java</li>
                            <li>Thymeleaf</li>
                            <li>Bootstrap</li>
                            <li>Lombok</li>
                            <li>PostgresSQL</li>
                            <li>Junit/Mockito</li>
                            <li>Maven</li>
                        </ul>
                    </article>

                    `,
                collapse: Collapse.COLLAPSED
            }
        ],
        tecnologia: _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.JAVA}) as Tecnologia,
        tituloProjeto: "Controlador de Despesas Silvano",
        tecnologiasAuxiliares: [
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.SPRING_BOOT}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.BOOTSTRAP}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.POSTGRES_SQL}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.THYMELEAF}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.JAVA}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.LOMBOK}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.JUNIT}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.MOCKITO}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.APACHE_MAVEN}) as Tecnologia
        ],
        status: [StatusProjeto.EM_DESENVOLVIMENTO],
        visibilidade: Visibilidade.PRIVADO
    };
