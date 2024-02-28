import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.page.html',
  styleUrls: ['./trabajos.page.scss'],
})
export class TrabajosPage implements OnInit { 
  trabajos:Array<any> =  [{
    tituloOficio:String,
    descripcionOficio:String,
    nombreSolicitante:String,
    apellidoSolicitante:String,
    fechaPedido:String,
    ubicacionTrabajo:String
  }]

  constructor() { }

  ngOnInit() {
    this.arrayNotificacionesTrabajo();
  }

  aceptarTrabajo() {
    console.log("Acepto el TRABAJO");
  }

  closeNotification(){
    console.log("No acepto el TRABAJO");
  }

  arrayNotificacionesTrabajo(){
    this.trabajos =  [{
      tituloOficio:"Cortador de pasto",
      descripcionOficio:"Necesito que corten el pasto de mí terreno 30x20 metros el dia de hoy o mañana",
      nombreSolicitante:"Emiliano",
      apellidoSolicitante:"Insfran",
      fechaPedido:"13/04/2023",
      ubicacionTrabajo:"Buenos Aires - Ezeiza - La unión",
    },{
      tituloOficio:"Cortador de pasto",
      descripcionOficio:"Necesito que corten el pasto de mí terreno 30x20 metros el dia de hoy o mañana. tengo varios terrenos mas para el mismo trabajo",
      nombreSolicitante:"Emiliano",
      apellidoSolicitante:"Insfran",
      fechaPedido:"13/04/2023",
      ubicacionTrabajo:"Buenos Aires - Ezeiza - La unión"
    },{
      tituloOficio:"Cortador de pasto",
      descripcionOficio:"Necesito que corten el pasto de mí terreno 30x20 metros el dia de hoy o mañana",
      nombreSolicitante:"Emiliano",
      apellidoSolicitante:"Insfran",
      fechaPedido:"13/04/2023",
      ubicacionTrabajo:"Buenos Aires - Ezeiza - La unión"
    },{
      tituloOficio:"Cortador de pasto",
      descripcionOficio:"Necesito que corten el pasto de mí terreno 30x20 metros el dia de hoy o mañana, ",
      nombreSolicitante:"Emiliano",
      apellidoSolicitante:"Insfran",
      fechaPedido:"13/04/2023",
      ubicacionTrabajo:"Buenos Aires - Ezeiza - La unión"
    },{
      tituloOficio:"Cortador de pasto",
      descripcionOficio:"Necesito que corten el pasto de mí terreno 30x20 metros el dia de hoy o mañana",
      nombreSolicitante:"Emiliano",
      apellidoSolicitante:"Insfran",
      fechaPedido:"13/04/2023",
      ubicacionTrabajo:"Buenos Aires - Ezeiza - La unión"
    },{
      tituloOficio:"Cortador de pasto",
      descripcionOficio:"Necesito que corten el pasto de mí terreno 30x20 metros el dia de hoy o mañana",
      nombreSolicitante:"Emiliano",
      apellidoSolicitante:"Insfran",
      fechaPedido:"13/04/2023",
      ubicacionTrabajo:"Buenos Aires - Ezeiza - La unión"
    }]
    
  }

}
