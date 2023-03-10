import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  logout() {
    //this.sesion = false;
    //Elimina una variable especifica del localStorage
    //localStorage.removeItem("nombre");

    //Elimina todas las variables del localStorage
    localStorage.clear();

    //Redireccionamiento a un url especifico
    this.router.navigate(['/']);
    alert("Sesión cerrada correctamente");
  }
}
