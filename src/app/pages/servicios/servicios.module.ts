import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosPageRoutingModule } from './servicios-routing.module';

import { ServiciosPage } from './servicios.page';
import { SharedModuleOficiosComponent } from "../../shared/shared-oficios.module";
import { WarningComponent } from "../../component/warning/warning.component";
import { InfoComponent } from "../../component/info/info.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosPageRoutingModule,
    SharedModuleOficiosComponent,
    
  ],
  declarations: [ServiciosPage, WarningComponent,InfoComponent]
})
export class ServiciosPageModule {}
