import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProductos } from 'src/app/models/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formB: FormBuilder, private firestore:ProductosService) {
    this.formulario = formB.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      numero: ['',Validators.required],
      url: ['', Validators.required],
      precio: ['',Validators.required],
    })

  }

  ngOnInit(): void {
  }
  enviarDatos() {
    console.log(this.formulario.value);
    const producto:IProductos = {
      nombre : this.formulario.value.nombre,
      descripcion: this.formulario.value.descripcion,
      numero:this.formulario.value.numero,
      url : this.formulario.value.url,
      precio: this.formulario.value.precio,

    }
    this.firestore.agregarProducto(producto)
  }
}

