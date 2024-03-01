import { Component, OnInit, ViewChild,Input, Output, } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Item, ObjResultadoBusqueda } from '../pedidos/types'; 
import { OficiosService } from '../../apí/oficios.service';
import { CheckboxCustomEvent } from '@ionic/angular';
import { ModalService } from "../../../service/modal.service";

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'], 
})

export class ServiciosPage implements OnInit {
  showOficios:boolean =false;
  hideEliminarOficio:boolean=false;
  canDismiss:boolean = false;
  isModalOpen:boolean = false;
  presentingElement:any;
  slidingItem: boolean = true;
  
  constructor(private oficiosService: OficiosService, public modalService: ModalService) { }

  arrayOficiosSeleccionados = [
    { id: 0, nombre: '' }];

  ngOnInit() {
    this.showMessageOtrosOficios();
    this.isModalOpen = false;
    this.getDataOficios();
    this.presentingElement = document.querySelector('.ion-page');
  }
  
  @ViewChild('modalOficios', { static: true }) modalOficios!: IonModal;
  
  selectedFruitsText = '0 Items';
  selectedFruits: string[] = [];
  
  fruits: Item[] = [];
  resultadoBusqueda: ObjResultadoBusqueda[] = [];

  showMessageOtrosOficios() :void {
    this.showOficios = this.arrayOficiosSeleccionados.length > 0 && this.arrayOficiosSeleccionados[0].nombre !== '';
  }

  eliminarTag(tag: any) {
    const index = this.arrayOficiosSeleccionados.indexOf(tag);
    if (index !== -1) {
      this.arrayOficiosSeleccionados.splice(index, 1);
    }
    this.showMessageOtrosOficios();
    if(this.arrayOficiosSeleccionados.length === 0) {
      this.hideEliminarOficio = false;
      this.fruitSelectionChanged([]);
    }
  }

  editarOficios():void{
    this.hideEliminarOficio = true;
  }

  setOficiosEditados():void {
    this.hideEliminarOficio = false;
    let arrayDeNombres: string[]  = this.arrayOficiosSeleccionados.map(objeto => objeto.nombre);
    this.fruitSelectionChanged(arrayDeNombres)
  }
  
  showTagsOficios() : void {
    let ultimoId = 0;
    const arrayDeOficiosSeleccionados = this.selectedFruits.map((nombre) => {
        ultimoId++;
        return { id: ultimoId, nombre };
    });
    console.log("MUESTRO OFICIO final",arrayDeOficiosSeleccionados); 
    this.arrayOficiosSeleccionados = arrayDeOficiosSeleccionados;
    this.showMessageOtrosOficios();
  }

  //Modal de oficios
  
  getDataOficios() {
    this.oficiosService.getLocalData().subscribe(data => {
      console.log("Local Data:");
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
    this.modalOficios.dismiss();
    this.showTagsOficios();
  }


  onDragStart() {
    this.slidingItem = true;
  }

  onDragEnd() {
    this.slidingItem = false;
  }

  //resultado de busqueda
  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }

  openModal() {
    this.modalOficios.present();
  }
}
