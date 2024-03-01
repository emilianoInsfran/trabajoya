import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class DatosPerfilUsuario {
  datosPerfil:any={}
  editarPerfil:boolean=false
  cancelarEditarPerfil:boolean=false

  constructor(private http: HttpClient) { }

  setDataPerfil(datosPerfil:any){
    this.datosPerfil = datosPerfil;
  }

  getDataPerfil(){
    return this.datosPerfil.perfil.usuario;
  }

  setEditarPerfil(editarPerfil:boolean){
    this.editarPerfil = editarPerfil;
  }

  getEditarPerfil(){
    return this.editarPerfil;
  }

  setCancelarEditarPerfil(cancelarEditarPerfil:boolean){
    this.cancelarEditarPerfil = cancelarEditarPerfil;
  }

  getCancelarEditarPerfil(){
    return this.cancelarEditarPerfil;
  }
}
