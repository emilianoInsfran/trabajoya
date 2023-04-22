import { Component, OnInit, ViewChild,CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Item } from './types'; 
import { OficiosService } from '../apí/oficios.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'], 
})

export class ServiciosPage implements OnInit {

  constructor(private oficiosService: OficiosService) { }

  ngOnInit() {
    this.getDataOficios();
  }
  
  @ViewChild('modal', { static: true }) modal!: IonModal;
  
  selectedFruitsText = '0 Items';
  selectedFruits: string[] = [];
  
  fruits: Item[] = [];

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
    this.modal.dismiss();
  }

  buscarEmpleado(){
    console.log("Buscando empleado");
  }

}
