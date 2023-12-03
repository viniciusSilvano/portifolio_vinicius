import { Component, Input, OnInit } from '@angular/core';
import { ProjetoEspecificacao } from 'src/app/projetos-especificacao/class/projeto_especificacao';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {
  @Input() projeto : ProjetoEspecificacao;

  constructor() { }

  ngOnInit() {
  }

}
