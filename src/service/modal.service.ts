import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpenModal = false;

  constructor() { }

  getOpenModal() {
    return this.isOpenModal;
  }

  setOpenModal(isOpenModal:boolean) {
    this.isOpenModal = isOpenModal;
  }

}