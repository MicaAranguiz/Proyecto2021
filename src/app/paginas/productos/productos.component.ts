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
      if(user.email!=undefined){ //cuando se loguea, cambia el estado
        this.logueado=true
      }
      else{
        this.logueado=false;
      }
    })

  }
  ngOnInit(): void {
    this.productosService.productos //para recibir los cambios al instante
    .subscribe((respuesta) => {
      this.productos = respuesta;
      console.log(this.productos);
    })
    console.log(this.productos)
  }

  eliminarProducto(id:string){
    this.productosService.eliminarProducto(id); //busca por id, la toma y borra el elemento
   console.log(id)
  }



}

