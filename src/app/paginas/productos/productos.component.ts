import { IProductosId } from './../../models/productos.interface';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productos!: IProductosId[];

  public logueado:boolean = false
  constructor(private productosService: ProductosService, private auth: LoginService) {
    this.auth.user.subscribe((user)=>{
      if(user.email!=undefined){
        this.logueado=true
      }
      else{
        this.logueado=false;
      }
    })

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



}

