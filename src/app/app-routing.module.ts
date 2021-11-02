import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './paginas/agregar/agregar.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { EditarComponent } from './paginas/editar/editar.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { LoginComponent} from './paginas/login/login.component'
import { StorageComponent } from './paginas/storage/storage.component';

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
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'storage', component:StorageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
