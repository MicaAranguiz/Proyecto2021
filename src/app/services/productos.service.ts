import { AngularFireStorage } from '@angular/fire/compat/storage';
import { IProductosId } from './../models/productos.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductos } from '../models/productos.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //declaramos
  public urlImagen: string = "";
  public productos!: Observable<IProductosId[ ]>;  //te avisa cuando hay cambios
  public collecttionProducto!: AngularFirestoreCollection<any>;
  filePath: string = "";
  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
    this.collecttionProducto = this.firestore.collection<IProductosId>("productos");
    this.obtenerProductos();
  }
  public obtenerProductos() {
    this.productos = this.collecttionProducto.snapshotChanges().pipe( //permite que cuando haya cambios recibamos notificaciones
      map(action => action.map(a => {
        const data = a.payload.doc.data() as IProductos
        const id = a.payload.doc.id

        return { id, ...data }
      }))
    )
    return this.productos
  }


  obtenerProducto(id: string) {
    return this.collecttionProducto.doc(id).snapshotChanges
  }
  buscarXcategoria(cat:string){
    return this.collecttionProducto.doc(cat).snapshotChanges
  }

  eliminarProducto(id: string) {//el doc busca por el id, en este caso
    return this.collecttionProducto.doc(id).delete()
  }

  agregarProducto(data: IProductos) {
    return this.collecttionProducto.add(data) //buscamos en la coleccion y retornamos lo que necesitamos
  }

  editarProducto(id: string, data: IProductos) {
    return this.collecttionProducto.doc(id).update(data)
  }
  subirImagen(imagen: File, product: IProductos) {
    this.filePath = `catalogo/${imagen.name}` //donde insertar la imagen
    const fileRef = this.storage.ref(this.filePath) //donde buscarla 
    const tarea = this.storage.upload(this.filePath, imagen) //donde subirla

    tarea.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.urlImagen = url; //la imagen se llama url siempre

          product.url=this.urlImagen //donde se almacena
          console.log(product) //lo mostramos para verificar que funcione
          this.agregarProducto(product) //mostramos 
        })
//tomo la url, la trae, y la sube

      })
    ).subscribe()
  }


}
