import { Service } from '@angular/core';
import { Tecnologia } from '../class/tecnologia';
import { TECNOLOGIAS } from '../data/TECNOLOGIAS_DADOS';

@Service()
export class TecnologiaService {

  constructor() { }

  findAll() : Tecnologia[]{
    return Object.assign([], TECNOLOGIAS);
  }
}
