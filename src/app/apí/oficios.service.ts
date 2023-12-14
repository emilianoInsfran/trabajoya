import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class OficiosService {

  constructor(private http: HttpClient) {

  }

  getLocalData(){
    return this.http.get("../../assets/listaOficios/oficios.json");
  }
  
  getLocalDataResultadoBusqueda(){
    return this.http.get("../../assets/listaResultadoOficios/resultadoBusqueda.json");
  }
}
