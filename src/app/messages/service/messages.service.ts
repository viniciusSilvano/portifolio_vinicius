import { Service } from '@angular/core';
import {Alert,ALERTS} from '../alert';

@Service()
export class MessagesService {

  constructor() { }

  getMessageById(id: number): Alert | undefined {
    return ALERTS.find(x => x.id == id);
  }
}
