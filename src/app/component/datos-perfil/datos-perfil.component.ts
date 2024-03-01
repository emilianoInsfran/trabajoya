import { Component, Input, OnInit } from '@angular/core';
import { DatosPerfil } from '../../pages/perfil/types-perfil';

@Component({
  selector: 'app-datos-perfil',
  templateUrl: './datos-perfil.component.html',
  styleUrls: ['./datos-perfil.component.scss'],
})
export class DatosPerfilComponent implements OnInit {
  @Input() objDatosPerfil!: DatosPerfil;
  
  constructor() { }

  ngOnInit() {
    console.log("componente datos-perfil", this.objDatosPerfil)

  }

}
