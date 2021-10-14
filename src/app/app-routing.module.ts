import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './paginas/footer/footer.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { ProductosComponent } from './paginas/productos/productos.component';

const routes: Routes = [
  {
    path: 'productos', component: ProductosComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'footer', component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
