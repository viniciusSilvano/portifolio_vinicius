import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  closeResult = '';
  showedCacheWarningKey = 'showedCacheWarningKey';
  constructor(
    private modalService: NgbModal) { }

  @ViewChild('content', {static: true}) modalContent : ElementRef;

  ngOnInit() {
    if(!sessionStorage.getItem(this.showedCacheWarningKey)){
      this.open(this.modalContent);
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {});
  }

  onConfirmButtonClick(){
    sessionStorage.setItem(this.showedCacheWarningKey,new Boolean(true).toString());
    this.modalService.dismissAll();
    //Criar cookie para vê se o usuário está ciente.
  }

}
