import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregaremp',
  templateUrl: './agregaremp.component.html',
  styleUrls: ['./agregaremp.component.css']
})
export class AgregarempComponent {
  resultado!: string;

  constructor(private fb: FormBuilder) {

  }

  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]]
  });

  onSubmit() {
    if (this.formularioContacto.valid) {
      this.resultado = 'Todos los datos son válidos.';
    } else {
      this.resultado = 'Hay datos inválidos en el formulario.';
    }
  }

  empleado = {
    codigo: "codigo",
    nombre: "nombre",
    apellido: "apellido",
    telefono: "telefono",
    correo: "correo",
    direccion: "direccion",
    puesto: "puesto",
    imagen: "imagen",
    estatus: "estatus",
    idUsuario: "idUsuario"
  }

  guardarEmp() {

  }//Cierre del metodo guardarEmp

  modificarEmp() {

  }//Cierre del metodo modificarEmp

  eliminarEmp() {

  }//Cierre del metodo eliminarEmp

  consultarEmp() {

  }//Cierre del metodo consultarEmp

  consultarTodoEmp() {

  }//Cierre del metodo consultarTodoEmp

  limpiarEmp() {
    this.empleado.codigo = "";
    this.empleado.nombre = "";
    this.empleado.telefono = "";
    this.empleado.correo = "";
    this.empleado.direccion = "";
    this.empleado.puesto = "";
    this.empleado.imagen = "";
    this.empleado.estatus = "";
    this.empleado.idUsuario = "";



  }//Cierre del metodo limpiarEmp
}
