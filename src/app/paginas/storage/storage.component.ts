import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProductos } from 'src/app/models/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  formulario: FormGroup;
  imagenSeleccionada!:File;
  public filePath: string = "";


  constructor(private formB: FormBuilder, private storage: AngularFireStorage, private productsServices : ProductosService, private route: Router) {
    this.formulario = formB.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      numero: ['',Validators.required],
      url: ['', Validators.required],
      precio: ['',Validators.required],
      cat:['',Validators.required],
      marca:['',Validators.required],
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

    this.productsServices.subirImagen(this.imagenSeleccionada, this.formulario.value)
  }
  volveraproducto() {
    this.route.navigateByUrl('productos')
 
  }
}
