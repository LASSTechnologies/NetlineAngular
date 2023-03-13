import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-consultaremp',
  templateUrl: './consultaremp.component.html',
  styleUrls: ['./consultaremp.component.css']
})
export class ConsultarempComponent {

  constructor(public ServicioEmp: EmpleadosService) { }

  file: any;
  empleados: any = [];



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

  ngOnInit(): void { }

  modificarEmp() {
    this.ServicioEmp.modificar(
      this.ServicioEmp.empleado.codigo,
      this.ServicioEmp.empleado.nombre,
      this.ServicioEmp.empleado.apellido,
      this.ServicioEmp.empleado.puesto,
      this.ServicioEmp.empleado.telefono,
      this.ServicioEmp.empleado.correo,
      this.ServicioEmp.empleado.direccion,
      this.ServicioEmp.empleado.estatus,
      this.file
    ).subscribe(
      (res) => {
        alert('Empleado modificado correctamente');
        this.limpiarEmpServicio();
        location.reload();
      },
      (err) => {
        console.log(err);
        if (typeof err.error === 'string') {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
        this.limpiarEmpServicio();
      }
    );
  }//Cierre del metodo modificarEmp

  eliminarEmp(codigo: string) {
    this.ServicioEmp.eliminar(codigo).subscribe(
      (res) => {
        alert('Empleado eliminado');
        this.limpiarEmp();
        location.reload();
      },
      (err) => {
        console.log(err);
        if (typeof err.error === 'string') {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
      }
    );

  }//Cierre del metodo eliminarEmp

  consultarEmp(codigo: string) {
    this.ServicioEmp.consultar(codigo).subscribe(
      res => {
        this.ServicioEmp.empleado.codigo = res.emp.codigo;
        this.ServicioEmp.empleado.nombre = res.emp.nombre;
        this.ServicioEmp.empleado.apellido = res.emp.apellido;
        this.ServicioEmp.empleado.puesto = res.emp.puesto;
        this.ServicioEmp.empleado.telefono = res.emp.telefono;
        this.ServicioEmp.empleado.correo = res.emp.correo;
        this.ServicioEmp.empleado.direccion = res.emp.direccion;
        this.ServicioEmp.empleado.estatus = res.emp.estatus;
        this.ServicioEmp.empleado.imgurl = res.emp.imagen;
      },
      (err) => {
        console.log(err);
        if (typeof err.error === 'string') {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
        this.limpiarEmpServicio();
      }
    );
  } //Cierre del metodo

  consultarTodoEmp() {

  }//Cierre del metodo consultarTodoEmp

  limpiarEmpServicio() {
    this.ServicioEmp.empleado.codigo = "";
    this.ServicioEmp.empleado.nombre = "";
    this.ServicioEmp.empleado.telefono = "";
    this.ServicioEmp.empleado.correo = "";
    this.ServicioEmp.empleado.direccion = "";
    this.ServicioEmp.empleado.puesto = "";
    this.ServicioEmp.empleado.imgurl = "";
    this.ServicioEmp.empleado.estatus = "";
  }//Cierre del metodo limpiarEmp

  limpiarEmp() {
    this.empleado.codigo = "";
    this.empleado.nombre = "";
    this.empleado.telefono = "";
    this.empleado.correo = "";
    this.empleado.direccion = "";
    this.empleado.puesto = "";
    this.empleado.imgurl = "";
    this.empleado.estatus = "";
  }//Cierre del metodo limpiarEmp
}