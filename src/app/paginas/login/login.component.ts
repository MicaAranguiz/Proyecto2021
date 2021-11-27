
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/auth/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formularioLogin: FormGroup;


  constructor(private fb: FormBuilder, private auth: LoginService, private route: Router) {
    this.formularioLogin = fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {

  }

  async login() {
    if (!this.formularioLogin.invalid) {
      const { username, password } = this.formularioLogin.value;
     await  this.auth.LoginFirebase(username, password);
     this.route.navigateByUrl('productos')
     alert('INICIASTE SESIÓN');
    }
    else {
 
    }
  }
  cerrarSesion() {
    this.route.navigateByUrl('inicio')
    alert('CERRASTE SESIÓN');
  }

}
