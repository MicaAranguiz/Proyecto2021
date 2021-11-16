//colocamos lo mismo que tenemos en firebase con un nombre específico
export interface IProductosId extends IProductos {
  id: string;
}

export interface IProductos {
  nombre: string;
  descripcion: string;
  url: string;
  precio: string;
  numero:string;
  cat:string,
}
