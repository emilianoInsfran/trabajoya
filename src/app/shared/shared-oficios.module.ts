import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OficiosComponent } from '../component/oficios/oficios.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    OficiosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    OficiosComponent
  ]
})
export class SharedModuleOficiosComponent { }
