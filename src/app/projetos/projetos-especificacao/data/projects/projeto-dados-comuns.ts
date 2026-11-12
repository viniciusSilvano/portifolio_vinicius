/** Identificadores estáveis das seções exibidas nos accordions dos projetos. */
export enum AccordionSectionId {
  DESCRIPTION = 1,
  ABOUT = 2,
  SOURCE = 3
}

/** IDs usados pela aplicação para classificar e filtrar projetos. */
export enum PROJETOS {
  NONE,
  ALUGUEIS,
  SGQ_SISTEMA_GERENCIAMENTO_QUESTAO,
  TESTE_JAVA_PROJECT,
  TESTE_ANGULAR_TWO_PLUS_PROJECT,
  RED_ZERO_TCC,
  MEU_PRIMEIRO_PORTIFOLIO,
  CONTROLE_DESPESAS,
  PORTIFOLIO_BACKEND
}

export const PriorizacaoPorProjeto: Record<number,number> = {
  // projetos pessoais
  [PROJETOS.CONTROLE_DESPESAS] : 1,
  [PROJETOS.SGQ_SISTEMA_GERENCIAMENTO_QUESTAO] : 2,
  [PROJETOS.PORTIFOLIO_BACKEND] : 3,
  [PROJETOS.ALUGUEIS] : 4,
  [PROJETOS.RED_ZERO_TCC] : 5,
  [PROJETOS.MEU_PRIMEIRO_PORTIFOLIO] : 6,
  //projetos de teste
  [PROJETOS.TESTE_JAVA_PROJECT] : 1,
  [PROJETOS.TESTE_ANGULAR_TWO_PLUS_PROJECT] : 2,
}
