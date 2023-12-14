import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosPageRoutingModule } from './servicios-routing.module';

import { ServiciosPage } from './servicios.page';
import { OficiosComponent } from './oficios/oficios.component';
import { BusquedaComponent } from '../modal/busqueda/busqueda.component';
import { ResultadoBusquedaComponent } from '../component/resultado-busqueda/resultado-busqueda.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosPageRoutingModule
  ],
  declarations: [ServiciosPage,OficiosComponent,BusquedaComponent,ResultadoBusquedaComponent]
})
export class ServiciosPageModule {}
