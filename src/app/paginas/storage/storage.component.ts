import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProductos } from 'src/app/models/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  formulario: FormGroup;
  imagenSeleccionada!:File;
  public filePath: string = "";


  constructor(private formB: FormBuilder, private storage: AngularFireStorage, private productsServices : ProductosService) {
    this.formulario = formB.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      url: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

// subir la imagen
  seleccionarImagen(event:any){
    console.log("hola")
     this.imagenSeleccionada = event.target.files[0]; //buscas el elemento donde lo necesitas

  }
  guardarProducto(){
    alert("voy a guardar");
    this.productsServices.subirImagen(this.imagenSeleccionada, this.formulario.value)
  }







  // enviarDatos() {
  //   console.log(this.formulario.value);
  //   const archivo : IProductos = {
  //     url: this.formulario.value.url,
  //     nombre: '',
  //     descripcion: '',
  //     precio: '',
  //     numero: ''
  //   }
  //   this.firestore.agregarProducto(archivo)
  // }
}
