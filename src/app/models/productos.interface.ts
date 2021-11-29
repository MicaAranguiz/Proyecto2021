//colocamos lo mismo que tenemos en firebase con un nombre específico
export interface IProductosId extends IProductos {
  id: string;
}
//todo tiene que ser con el nomnbre de la base de datos
export interface IProductos {
  nombre: string;
  descripcion: string;
  url: string;
  precio: string;
  numero:string;
  cat:string,
  marca:string;
}
