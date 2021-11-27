import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public formularioLogin: FormGroup
  public email:string='';
  public logueado:boolean=false;
  constructor(private auth:LoginService, private fb: FormBuilder, private route: Router) {
    this.formularioLogin = fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
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
    this.auth.user.subscribe((user)=>{
      if(user.email!=undefined){
        this.email=user.email;
        this.logueado=true;
      }
      else{
          this.logueado=false;
      }
      

    })
  }
  
  async login() {
    if (!this.formularioLogin.invalid) {
      const { username, password } = this.formularioLogin.value;
     await  this.auth.LoginFirebase(username, password);
      alert('iNICIASTE SESIÓN');
      alert(this.auth.autenticado());

    }
    else {
      alert('CERRASTE SESIÓN');
      alert(this.auth.autenticado());
    
    }
  }
  cerrarSesion() {
    this.auth.cerrarSesion();
    this.route.navigateByUrl('login')
  }

}
