export interface Item {
    nombre: string,
    value: string,
    disabled :boolean
};

export interface ObjResultadoBusqueda {
   nombre:string,
   apellido:string,
   edad:string,
   telefono:number,
   celular:string,
   email:string,
   identidadValidada:true,
   location: string,
}