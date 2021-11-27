import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user!: Observable<any>

  constructor(private auth: AngularFireAuth) {
    this.user = this.auth.authState;
  }

  //iniciamos sesion con email y contraseña
  LoginFirebase(username: string, password: string) {
    this.auth.signInWithEmailAndPassword(username, password);
  }
  //cerramos sesion
  cerrarSesion() {
    this.auth.signOut();
  }
  autenticado(): boolean {
    return this.user != null;
  }
  currentUser(): Observable<any> {
    return this.user;
  }

}
