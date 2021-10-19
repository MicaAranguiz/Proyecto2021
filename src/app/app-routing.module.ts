import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './paginas/agregar/agregar.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { EditarComponent } from './paginas/editar/editar.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { ProductosComponent } from './paginas/productos/productos.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full',
  },
  {
    path: 'productos', component: ProductosComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'editar', component:EditarComponent
  },
  {
    path: 'agregar', component:AgregarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
