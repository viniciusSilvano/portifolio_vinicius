import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProjetosExistentesService } from "../projetos-existentes.service";
import {ProjetoEspecificacao} from "../projetos-especificacao-classes/projeto_especificacao";
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos-existentes',
  templateUrl: './projetos-existentes.component.html',
  styleUrls: ['./projetos-existentes.component.css']
})
export class ProjetosExistentesComponent implements OnInit {
  
  public projetosExistente : ProjetoEspecificacao[];
  public projetosExistenteFiltered : ProjetoEspecificacao[];
  constructor( 
    private route: ActivatedRoute,
    private service: ProjetosExistentesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.setProjetosExistentesById();
  }
  
  setProjetosExistentesById(): void{
    const id= +this.route.snapshot.paramMap.get('idTecnologia');
    this.service.getProjetoEspecificaoByIdTecnologia(id)
      .subscribe(x => 
        {
          this.projetosExistente = x; 
          this.projetosExistenteFiltered = x;
        }
        ,err => console.log("Error",err)
        );
  }

  redirect(idEspecificacao: number) : void{
    this.router.navigateByUrl(`/projetoEspecificacao/${idEspecificacao}`);
  }

  filterItem(value){
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    this.projetosExistenteFiltered = Object.assign([], this.projetosExistente).filter(
       item => item.tituloProjeto.toLowerCase().indexOf(value.toLowerCase())  > -1
    )
  }
  assignCopy(){
    this.projetosExistenteFiltered = Object.assign([], this.projetosExistente);
  }



}
