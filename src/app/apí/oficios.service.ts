import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class OficiosService {
  datosPerfil:any={}
  constructor(private http: HttpClient) {}

  getLocalData(){
    return this.http.get("../../assets/listaOficios/oficios.json");
  }
  
  getLocalDataResultadoBusqueda(){
    return this.http.get("../../assets/listaResultadoOficios/resultadoBusqueda.json");
  }

  getLocalDataPerfil(){
    return this.http.get("../../assets/perfil/perfil.json")
  }

  setDataPerfil(datosPerfil:any){
    this.datosPerfil = datosPerfil;
  }

  getDataPerfil(){
    return this.datosPerfil;
  }
}
