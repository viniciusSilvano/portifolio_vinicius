import { Component, OnInit } from '@angular/core';
import {ProjetosEspecificacaoComponent} from "../projetos-especificacao/projetos-especificacao.component";
import {ProjetoEspecificacao,imagensDoProjeto} from "../projetos-especificacao-classes/projeto_especificacao";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MessagesService} from "../messages.service";
import {Alert} from "../messages-classes/alert";

@Component({
  selector: 'app-projetos-carousel-imagens',
  templateUrl: './projetos-carousel-imagens.component.html',
  styleUrls: ['./projetos-carousel-imagens.component.css']
})
export class ProjetosCarouselImagensComponent implements OnInit {
  projeto : ProjetoEspecificacao;
  public imagemSelecionada : imagensDoProjeto;
  public alert : Alert;
  constructor(
    private projetoEspecificacao: ProjetosEspecificacaoComponent,
    private modalService: NgbModal,
    private messageService: MessagesService
    ) { }

  ngOnInit() {
    this.projeto = this.projetoEspecificacao.getProjetoEspecificacao();
    this.alert = this.messageService.getMessageById(3);
    this.alert.message = "Clique na imagem para ampliá-la"
  }
 
  showEvent(event : any){
    alert(event);
  }

  close(alert: Alert) {
    this.alert = undefined;
  }

  pegarURLDaImagemAtual(imagemSelecionada, content){
    this.imagemSelecionada = imagemSelecionada;
    this.modalService.open(content,{ size: 'lg'});
  }



}
