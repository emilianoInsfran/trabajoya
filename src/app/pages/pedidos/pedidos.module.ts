import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PedidosPageRoutingModule } from './pedidos-routing.module';
import { PedidosPage } from './pedidos.page';
import { BusquedaComponent } from '../../modal/busqueda/busqueda.component';
import { ResultadoBusquedaComponent } from '../../component/resultado-busqueda/resultado-busqueda.component';
import { SharedModuleOficiosComponent } from "../../shared/shared-oficios.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosPageRoutingModule,
    SharedModuleOficiosComponent,
  ],
  declarations: [PedidosPage,BusquedaComponent,ResultadoBusquedaComponent]
})
export class PedidosPageModule {}
