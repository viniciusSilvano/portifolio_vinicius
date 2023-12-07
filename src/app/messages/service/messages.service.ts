import { Injectable } from '@angular/core';
import {Alert,ALERTS} from '../alert';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  getMessageById(id : number): Alert{
    return ALERTS.find(x => x.id == id);
  }
}
