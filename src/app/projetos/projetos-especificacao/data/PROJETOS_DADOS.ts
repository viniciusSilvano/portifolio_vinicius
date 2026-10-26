import { ProjetoEspecificacao } from '../class/projeto_especificacao';
import { projeto as alugueis } from './alugueis';
import { projeto as sgq } from './sgq';
import { projeto as javaTest } from './java-test-project';
import { projeto as angularTest } from './angular-test-project';
import { projeto as redzero } from './redzero-tcc';
import { projeto as primeiroPortfolio } from './primeiro-portfolio';
import { projeto as controleDespesas } from './controle-despesas';
import { projeto as portfolioBackend } from './portfolio-backend';
/** Registro central; cada projeto tem seu próprio arquivo. */
export const PROJETOS_ESPECIFICACOES: ProjetoEspecificacao[] = [alugueis, sgq, javaTest, angularTest, redzero, primeiroPortfolio, controleDespesas, portfolioBackend];
