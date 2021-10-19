import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuComponent } from './paginas/menu/menu.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule }  from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import {MenuItem} from 'primeng/api';
import { LoginComponent } from './paginas/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ProductosComponent,
    ContactoComponent,
    InicioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //inicializamos la base de datos
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
