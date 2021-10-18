import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductos } from '../models/productos.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //declaramos 
  public productos!: Observable<IProductos[]>;
  public collecttionProducto!: AngularFirestoreCollection<IProductos>;
  constructor(private firestore: AngularFirestore ) { 
  this.collecttionProducto = this.firestore.collection<IProductos>("productos");
  this.obtenerProductos();
  }
  public obtenerProductos(){
    this.productos = this.collecttionProducto.snapshotChanges().pipe( //permite que cuando haya cambios recibamos notificaciones
      map(action => action.map (a => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id
        const producto:IProductos = {
          id : id,
         nombre: data.nombre,
          descripcion: data.descripcion,
          url: data.url
        }
        return producto
      }))
    )
  }


  obtenerProducto(id:string){
    return this.collecttionProducto.doc(id).snapshotChanges
  }

  eliminarProducto(id:string){//el doc busca por el id, en este caso
    return this.collecttionProducto.doc(id).delete()
  }

  agregarProducto(data:IProductos){
   return this.collecttionProducto.add(data)
  }

  editarProducto(id:string, data:IProductos){
    return this.collecttionProducto.doc(id).update(data)
  }


}