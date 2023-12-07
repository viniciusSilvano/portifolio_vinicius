import { ProjetoEspecificacao } from "src/app/projetos-especificacao/class/projeto_especificacao";

export class ProjetoFilter{
  tituloProjeto: String;
  tecnologiasSelecionadasParaBusca: number[];

  public isResetNeeded(): Boolean{
    return !this.tituloProjeto 
    && this.tecnologiasSelecionadasParaBusca.length == 0;
  }

  public filter(projeto: ProjetoEspecificacao): Boolean{
    if(this.tituloProjeto){
      let tituloProjetoAsLower : String = projeto.tituloProjeto.toLowerCase();
      return tituloProjetoAsLower.includes(this.tituloProjeto.toLowerCase());
    }
    return false;
  }
}