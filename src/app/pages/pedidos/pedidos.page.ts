import { Component, OnInit, ViewChild,Input, Output, } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Item, ObjResultadoBusqueda } from './types'; 
import { OficiosService } from '../../apí/oficios.service';
import { CheckboxCustomEvent } from '@ionic/angular';
import { ModalService } from "../../../service/modal.service";
import { DatosPerfilUsuario } from "../../services-shared/datos-perfil.service";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  canDismiss = false;
  isModalOpen = false;
  presentingElement:any;
  constructor(private oficiosService: OficiosService, public modalService: ModalService, public datosPerfilUsuario :DatosPerfilUsuario) { }
  
  ngOnInit() {
    this.isModalOpen = false;
    this.getDataOficios();
    this.getDataPerfil();
    this.presentingElement = document.querySelector('.ion-page');
  }
  
  @ViewChild('modal', { static: true }) modal!: IonModal;
  
  selectedFruitsText = '0 Items';
  selectedFruits: string[] = [];
  
  fruits: Item[] = [];
  resultadoBusqueda: ObjResultadoBusqueda[] = [];

  getDataPerfil() {
    this.oficiosService.getLocalDataPerfil().subscribe(data => {
      console.log("Local Data PERFIL:");
      console.log(data);
      this.datosPerfilUsuario.setDataPerfil(data);
    });
  }

  buscarEmpleado(){
    this.getDataResultadoBusqueda();
  }

  getDataResultadoBusqueda(){
    //obtiene los datos del servicio
    this.oficiosService.getLocalDataResultadoBusqueda().subscribe(data => {
      console.log("Local Data busqueda:");
      console.log(data);
      this.setListResultadoBusqueda(data)
    },error =>{
      console.log("Error del servicio : ", error);
    });
  }

  setListResultadoBusqueda(array:any) {
    console.log("Trabajador encontrado! ",this.modalService.getOpenModal());
    this.resultadoBusqueda = array.resultadoBusquedaTrabajador;
    this.modalService.setOpenModal(true);
  }

  getDataOficios() {
    this.oficiosService.getLocalData().subscribe(data => {
      console.log("Local Data OFICIOS:");
      console.log(data);
      this.setListOficios(data)
    });
  }

  setListOficios(array:any){
    this.fruits = array.oficios;
  }
  
  private formatData(data: string[]) {
    if (data.length === 1) {
      const fruit = this.fruits.find(fruit => fruit.value === data[0])
      return fruit?  fruit.nombre : '';
    }
  
    return `${data.length} items`;
  }
  
  fruitSelectionChanged(fruits: string[]) {
    this.selectedFruits = fruits;
    this.selectedFruitsText = this.formatData(this.selectedFruits);
    console.log("servicio seleccionado en pedidos: ",this.selectedFruitsText)//TODO: VER QUE DEVUELVA UN OBJETO CON EL ID O EL ID DIRECTAMENTE
    this.modal.dismiss();
    //aca llamar al servicio de busqueda:
    this.buscarEmpleado();
  }

  openModal() {
    this.modal.present();
  }

  //resultado de busqueda
  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }

  call() {
    console.log("llamar");
    let tel_number = '9870684933'
    window.open(`tel:${tel_number}`, '_system')
  }

}
