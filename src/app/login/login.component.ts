import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../services/empleados.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = {
    nombre: "",
    contra: ""
  }

  constructor(private router: Router, private ServicioLogin: LoginService, private ServicioEmp: EmpleadosService) {

  }

  login() {
    if (this.usuario.nombre != "" && this.usuario.contra != "") {
      this.ServicioLogin.login(this.usuario).subscribe(
        (res) => {
          this.ServicioLogin.consultarToken(res.usu.nombre).subscribe(
            (res) => {
              if (res.emp.estatus == 'Activo' || res.emp.estatus == 'activo') {
                console.log(res);
                setTimeout(() => { location.reload() }, 2000);
                alert("Bienvenido al sistema: " + res.emp.nombre);
                localStorage.setItem("nombre", res.emp.nombre);
                localStorage.setItem("apellido", res.emp.apellido);
                localStorage.setItem("puesto", res.emp.puesto);
                localStorage.setItem("imagen", res.emp.imagen);
                localStorage.setItem("token", res.emp.jwebtoken);
                this.router.navigate(['/private/inicio']);
                console.log(res);
              } else if (res.emp.estatus == 'Inactivo' || res.emp.estatus == 'inactivo') {
                alert("Error al iniciar sesión, vuelve a intentarlo");
              }
            },
            (err) => {
              console.log(err);
              if (typeof (err.error) == "string") {
                console.log(err.error);
              } else {
                console.log(err.error.error[0].msg);
                //alert(err.error.error[0].msg);
              }
            }
          );
        },
        (err) => {
          console.log(err);
          if (typeof (err.error) == "string") {
            console.log(err.error);
          } else {
            console.log(err.error.error[0].msg);
            //alert(err.error.error[0].msg);
          }
        }
      );
    }
    else {
      alert("Los campos no pueden estar vacios");
    }
  }

}
