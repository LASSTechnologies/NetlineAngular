import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-agregaremp',
  templateUrl: './agregaremp.component.html',
  styleUrls: ['./agregaremp.component.css']
})
export class AgregarempComponent {

  constructor(private ServicioEmp: EmpleadosService,) { }
  file: any;
  empleados: any;

  empleado = {
    codigo: "",
    nombre: "",
    apellido: "",
    puesto: "",
    telefono: "",
    correo: "",
    direccion: "",
    estatus: "",
    imgurl: "",

  }

  fotoseleccionada(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
    }
  }

  guardarEmp() {

    this.ServicioEmp.guardar(
      this.empleado.codigo,
      this.empleado.nombre,
      this.empleado.apellido,
      this.empleado.puesto,
      this.empleado.telefono,
      this.empleado.correo,
      this.empleado.direccion,
      this.empleado.estatus,
      this.file
    ).subscribe(
      (res) => {
        let usuario = {
          usuario: this.empleado.correo,
          contra: this.empleado.correo,
          tipo: this.empleado.puesto
        }
        this.ServicioEmp.guardarUsu(usuario).subscribe(
          res => {
            alert("Empleado guardado exitosamente" + "\nTu usuario es tu correo" + "\nTu contraseña es tu correo favor de cambiar al ingresar");
            this.limpiarEmp();
            setTimeout(() => {
              location.reload();
            }, 3000);
          },
          err => {
            console.log(err);
            if (typeof (err.error) == "string") {
              alert(err);
            } else {

              alert(err.error.error[0].msg);

            }
          }
        );

      },
      (err) => {

        console.log(err);
        if (typeof (err.error) == "string") {
          alert(err);
        } else {

          alert(err.error.error[0].msg);
        }
      }
    );

  }//Cierre del metodo guardarEmp



  limpiarEmp() {
    this.empleado.codigo = "";
    this.empleado.nombre = "";
    this.empleado.apellido = "";
    this.empleado.puesto = "";
    this.empleado.telefono = "";
    this.empleado.correo = "";
    this.empleado.direccion = "";
    this.empleado.estatus = "";
    this.empleado.imgurl = "";
  }//Cierre del metodo limpiarEmp
}