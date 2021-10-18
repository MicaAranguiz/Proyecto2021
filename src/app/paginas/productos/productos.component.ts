import { Component, OnInit } from '@angular/core';
import { IProductos } from 'src/app/models/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productos!: IProductos[];

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
   console.log(this.productos)
  } 
  

}


