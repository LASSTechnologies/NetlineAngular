import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mensaje = "";
  usuario = {
    nombre: "",
    contra: ""
  }

  constructor(private router: Router, private ServicioLogin: LoginService) {

  }

  login() {

    if (this.usuario.nombre != "" && this.usuario.contra != "") {
      if (this.usuario.nombre == "admin" && this.usuario.contra == "admin123") {
        //El setItem sirve para crear o modificar una varible del localStorage
        localStorage.setItem("nombre", this.usuario.nombre);
        //Redireción a una ruta especifica
        this.router.navigate(['/private/inicio']);
        alert("Bienvenido al sistema");
      } else {
        alert("Usuario y/o contraseña incorrectos")
      }
    } else {
      alert("Los campos no pueden estar vacios ")
    }

  }
}
