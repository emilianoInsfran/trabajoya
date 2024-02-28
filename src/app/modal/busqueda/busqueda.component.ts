import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { ObjResultadoBusqueda } from '../../pages/pedidos/types'
import { ModalService } from '../../../service/modal.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  @Output() cerrarModalBusqueda = new EventEmitter<void>();
  @Input() arrayListaResultado : ObjResultadoBusqueda[] = [];

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    console.log("arrayListaResultado",this.arrayListaResultado)
  }

  cerrarModal() {
    console.log("Entro al metodo cerrarModal")
    this.modalService.setOpenModal(false);
    this.cerrarModalBusqueda.emit();
  }
}
