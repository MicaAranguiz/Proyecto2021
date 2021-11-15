import { IProductosId } from './../../models/productos.interface';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productos!: IProductosId[];

  constructor(private productosService: ProductosService) {

  }
  ngOnInit(): void {
    this.productosService.productos
    .subscribe((respuesta) => {
      this.productos = respuesta;
      console.log(this.productos);
    })
    console.log(this.productos)
  }

  eliminarProducto(id:string){
    this.productosService.eliminarProducto(id);
   console.log(id)
  }

  editarProducto(){

  }

}

