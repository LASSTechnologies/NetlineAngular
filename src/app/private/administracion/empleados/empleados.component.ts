import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  constructor(private ServicioEmp: EmpleadosService,) { }
  file: any;
  empleados: any = [];

  p: number = 1;
  nPag: number = 0;
  buscarTexto = '';
  buscarEstatus = '';

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
        this.ServicioEmp.empleado.imgurl = res.emp.imgurl;
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

  ngOnInit(): void {
    this.consultarTodoEmp();
  }

  consultarTodoEmp() {
    this.empleados = this.ServicioEmp.consultarTodo();
  }//cierre de consultar todo

  limpiarEmpServicio() {
    this.ServicioEmp.empleado.codigo = "";
    this.ServicioEmp.empleado.nombre = "";
    this.ServicioEmp.empleado.apellido = "";
    this.ServicioEmp.empleado.puesto = "";
    this.ServicioEmp.empleado.telefono = "";
    this.ServicioEmp.empleado.correo = "";
    this.ServicioEmp.empleado.direccion = "";
    this.ServicioEmp.empleado.estatus = "";
    this.ServicioEmp.empleado.imgurl = "";
  }//Cierre del metodo limpiarEmp

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