import { Component } from '@angular/core';
import { AlertController, IonTabs } from '@ionic/angular';
import { DatosPerfilUsuario } from "../services-shared/datos-perfil.service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage { 

  constructor(private alertController: AlertController, public datosPerfilUsuario: DatosPerfilUsuario) {}

  async onTabWillChange(event: any,  tabs: IonTabs) {
    console.log("Cambio de tab",event);
    const { tab } = event;

    if (tab !== 'tab4' && this.datosPerfilUsuario.getEditarPerfil()) {
      const alert = await this.alertController.create({
        header: 'Confirmar',
        message: `¿Estás seguro de que deseas cancelar la edición de Perfil?`,// y cambiar a ${tab} ->para agregar el nombre de la sección,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              tabs.select('tab4'); 
            }
          }, {
            text: 'Aceptar',
            handler: () => {
              this.cancelarEditarPerfil();
              tabs.select(tab);
            }
          }
        ],
        cssClass: 'custom-alert'
      });

      await alert.present();
    }
  }

  cancelarEditarPerfil(){
    console.log("El usuario cancelo editar perfil");
    this.datosPerfilUsuario.setEditarPerfil(false);
  }

}
