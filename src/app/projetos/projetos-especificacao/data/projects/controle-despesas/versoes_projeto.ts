import { VersaoWrapper } from "../../../class/versao";
import { PROJETOS } from "../projeto-dados-comuns";
import { projeto as versao_0_1 } from "./versao_0_1/controle-despesas";
import { projeto as versao_1} from "./versao_1/controle-despesas";

export const versaoWrapper: VersaoWrapper = {
  idProjeto: PROJETOS.CONTROLE_DESPESAS,
  versoes: [
    {versao: {nome: "versao_0_1"},  projeto: versao_0_1},
    {versao: {nome: "versao_1"},  projeto: versao_1},
  ]
}
