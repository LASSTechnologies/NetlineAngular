import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:3000/usuarios";
  private urlemp = "http://localhost:3000/empleados";

  constructor(private router: Router, private http: HttpClient) {
  }

  consultarToken(nombre: String) {
    return this.http.get<any>(this.urlemp + "/login/" + nombre);
  }

  guardarUsu(usuario: object) {
    return this.http.post<any>(this.url, usuario);
  }

  modificarUsu(usuario: object) {
    return this.http.put<any>(this.url, usuario);
  }

  eliminarUsu(email: string) {
    return this.http.delete<any>(this.url + "/delete/" + email);
  }


  login(usuario: object) {
    return this.http.post<any>(this.url + "/iniciosesion", usuario);
  }

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

  esLogeado(): boolean {
    /*if (localStorage.getItem("nombre") != null) {
      return true;
    } else {
      return false;
    }*/
    //Sustituye el If-Else anterior
    return !!localStorage.getItem("nombre");
  }

  esEmpleado(): boolean {
    return !!localStorage.getItem("puesto");
  }

  suPuesto() {
    return localStorage.getItem("puesto");
  }
}
