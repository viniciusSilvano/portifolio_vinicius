import { ProjetoEspecificacao } from '../class/projeto_especificacao';
import { projeto as alugueis } from './projects/alugueis/alugueis';
import { projeto as sgq } from './projects/sgq/sgq';
import { projeto as javaTest } from './projects/java-test-project/java-test-project';
import { projeto as angularTest } from './projects/angular-test-project/angular-test-project';
import { projeto as redzero } from './projects/redzero-tcc/redzero-tcc';
import { projeto as primeiroPortfolio } from './projects/primeiro-portfolio/primeiro-portfolio';
import { projeto as controleDespesas } from './projects/controle-despesas/controle-despesas';
import { projeto as portfolioBackend } from './projects/portfolio-backend/portfolio-backend';
/** Registro central; cada projeto tem seu próprio arquivo. */
export const PROJETOS_ESPECIFICACOES: ProjetoEspecificacao[] = [alugueis, sgq, javaTest, angularTest, redzero, primeiroPortfolio, controleDespesas, portfolioBackend];
