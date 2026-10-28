import { ProjetoEspecificacao } from '../class/projeto_especificacao';
import { projeto as alugueis } from './projects/alugueis';
import { projeto as sgq } from './projects/sgq';
import { projeto as javaTest } from './projects/java-test-project';
import { projeto as angularTest } from './projects/angular-test-project';
import { projeto as redzero } from './projects/redzero-tcc';
import { projeto as primeiroPortfolio } from './projects/primeiro-portfolio';
import { projeto as controleDespesas } from './projects/controle-despesas';
import { projeto as portfolioBackend } from './projects/portfolio-backend';
/** Registro central; cada projeto tem seu próprio arquivo. */
export const PROJETOS_ESPECIFICACOES: ProjetoEspecificacao[] = [alugueis, sgq, javaTest, angularTest, redzero, primeiroPortfolio, controleDespesas, portfolioBackend];
