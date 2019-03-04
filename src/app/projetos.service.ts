import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Tecnologia} from "./projetos-classes/tecnologia";
import {TECNOLOGIAS} from "./projetos-classes/TECNOLOGIAS";

@Injectable({
  providedIn: 'root'
})
export class ProjetosService{

  constructor() { }

  getProjetoCards(): Observable<Tecnologia[]>{
    return of(TECNOLOGIAS);
  }
}
