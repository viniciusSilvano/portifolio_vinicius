import { ProjetoEspecificacao, StatusProjeto, TipoProjeto, Visibilidade } from '../class/projeto_especificacao';
import { GlobalStrings } from '../../../globalStrings/globalString';
import { TECNOLOGIA_ENUM, TECNOLOGIAS } from '../../../tecnologias/data/TECNOLOGIAS_DADOS';
import { SearchUtil } from '../../../util/search_util';
import { Tecnologia } from '../../../tecnologias/class/tecnologia';
import { Collapse } from '../../../comuns/class/accordion-card';
import { AccordionSectionId, PROJETOS } from './projeto-dados-comuns';
const _SEARCH_UTIL = new SearchUtil();

export const projeto: ProjetoEspecificacao = {
        id: PROJETOS.PORTIFOLIO_BACKEND,
        descricao: 'Projeto de backend para o portifólio, feito no SPRING BOOT',
        tipo: TipoProjeto.PESSOAIS,
        imagens:[
            {source: GlobalStrings.getAssetUrl("images/backend-portifolio-vinicius/MER_portifolio_backend_vinicius-min.png"),alt:"Imagem do Modelo de Entidade E Relacionamento do projeto",title: 'Modelo de Entidade E Relacionamento do projeto'},
            {source: GlobalStrings.getAssetUrl("images/backend-portifolio-vinicius/migrations_portifolio_backend-min.png"),alt:"Imagem apresentando as migrations e estrutura do projeto",title: 'Migrations e estrutura do projeto'}
        ],
        accordionCards: [
            {
                id: AccordionSectionId.DESCRIPTION,
                tituloDescricao: "Sobre o projeto",
                descricao:
                    `
                    <article>
                        <h2>Sobre o projeto</h2>
                        <p>Um projeto pensado auxiliar o meu primeiro portifólio feito apenas em angular<p/>
                        <p>esse projeto foi pensado para remover um pouco a carga que pode aumentar com o tempo.</p>
                        <p>Ele também serve como um exercício pessoal. </p>

                        <h3>Como foi planejado</h3>
                        <p>Toda a estrutura do portifólio angular segue modelos estruturados representados em JSON. </p>
                        <p>Utilizei migrations (flyway) para repassar os dados dos JSONs para o banco de dados e utiliza-los no novo backend</p>

                        <h3>Tecnologias utilizadas</h3>
                        <ul>
                            <li>Spring boot</li>
                            <li>Java</li>
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
        tituloProjeto: "Backend Portifólio Vinícius",
        tecnologiasAuxiliares: [
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.SPRING_BOOT}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.POSTGRES_SQL}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.JAVA}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.LOMBOK}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.JUNIT}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.MOCKITO}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.APACHE_MAVEN}) as Tecnologia,
            _SEARCH_UTIL.binarySearch(TECNOLOGIAS,{id: TECNOLOGIA_ENUM.FLYWAYDB}) as Tecnologia
        ],
        status: [StatusProjeto.EM_DESENVOLVIMENTO],
        visibilidade: Visibilidade.PRIVADO
    };
