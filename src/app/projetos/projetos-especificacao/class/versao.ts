import { ProjetoEspecificacao} from "./projeto_especificacao";

export class Versao{
  nome!: string;
  ehVersaoAtual?: boolean = false;
}

export class VersaoWrapper{
  idProjeto!: number;
  versoes!: TipoMapaVersaoProjeto[];
}

export const mapa_versao_projeto: Map<number,VersaoWrapper> =
  new Map<number,VersaoWrapper>();

export interface TipoMapaVersaoProjeto{
  versao: Versao;
  projeto: ProjetoEspecificacao;
}
