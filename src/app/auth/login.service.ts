import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user!: Observable<any>

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => { console.log(user?.email) })
  }

  login(email: string, pass: string) {
    this.auth.signInWithEmailAndPassword(email, pass);
  }
  get authenticated(): boolean {
    return this.user != null;
  }
  get currentUser(): Observable<any> {
    return this.user;
  }
}
