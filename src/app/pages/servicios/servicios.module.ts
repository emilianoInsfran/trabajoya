import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosPageRoutingModule } from './servicios-routing.module';

import { ServiciosPage } from './servicios.page';
import { OficiosComponent } from '../../component/oficios/oficios.component';
import { SharedModuleOficiosComponent } from "../../shared/shared-oficios.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosPageRoutingModule,
    SharedModuleOficiosComponent
  ],
  declarations: [ServiciosPage]
})
export class ServiciosPageModule {}
