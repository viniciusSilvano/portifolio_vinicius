import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  exports:[
    ModalComponent
  ]
})
export class ModalModule { }
