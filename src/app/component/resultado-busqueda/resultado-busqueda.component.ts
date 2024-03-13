import { Component, OnInit,Input, Output } from '@angular/core';
import { ObjResultadoBusqueda } from '../../pages/pedidos/types'
import {  Platform } from '@ionic/angular';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.scss'],
})
export class ResultadoBusquedaComponent implements OnInit {
  @Input() arrayListaResultadoTrabajador : ObjResultadoBusqueda[] = [];
  constructor(private platform: Platform) { }

  ngOnInit() {
    console.log("arrayListaResultadoTrabajador",this.arrayListaResultadoTrabajador);
  }

  get isIOS() {
    return this.platform.is('ios');
  }

  call() {
    console.log("llamar");
    let tel_number = '9870684933'
    window.open(`tel:${tel_number}`, '_system')
  }
}
