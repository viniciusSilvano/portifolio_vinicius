import { VersaoWrapper } from "../../../class/versao";
import { PROJETOS } from "../projeto-dados-comuns";
import { projeto as versao_0_1 } from "./versao_0_1/controle-despesas";
import { projeto as versao_1} from "./versao_1/controle-despesas";


export enum versoes{
  VERSAO_1 = "Versão 1, projeto 2",
  VERSAO_0_1 = "Versão 0, projeto 1"
}

export const versaoWrapper: VersaoWrapper = {
  idProjeto: PROJETOS.CONTROLE_DESPESAS,
  versoes: [
    {versao: {nome: versoes.VERSAO_1, ehVersaoAtual: true},  projeto: versao_1},
    {versao: {nome: versoes.VERSAO_0_1},  projeto: versao_0_1},
  ]
}
