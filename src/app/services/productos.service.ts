import { IProductosId } from './../models/productos.interface';
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
  public productos!: Observable<IProductosId[]>;
  public collecttionProducto!: AngularFirestoreCollection<any>;
  constructor(private firestore: AngularFirestore ) {
  this.collecttionProducto = this.firestore.collection<IProductosId>("productos");
  this.obtenerProductos();
  }
  public obtenerProductos(){
    this.productos = this.collecttionProducto.snapshotChanges().pipe( //permite que cuando haya cambios recibamos notificaciones
      map(action => action.map (a => {
        const data = a.payload.doc.data()as IProductos
        const id = a.payload.doc.id

        return {id, ...data}
      }))
    )
    return this.productos
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
