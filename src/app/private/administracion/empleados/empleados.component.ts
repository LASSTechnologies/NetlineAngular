import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  resultado!: string;
  p: number = 1;

  constructor(private fb: FormBuilder) {

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

  empl = [
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
    {
      codigo: "1",
      nombre: "Humberto",
      apellido: "Contreras",
      telefono: "336547891",
      correo: "Hcontreras@correo.com",
      direccion: "Calle 1 #123, Ciudad",
      puesto: "Gerente de Ventas<",
      imagen: "imagen.jpg",
      estatus: "Activo"
    },
    {
      codigo: "2",
      nombre: "María",
      apellido: "Gómez",
      telefono: "0987654321",
      correo: "mariagomez@mail.com",
      direccion: "Calle 2 #456, Ciudad",
      puesto: "Asistente Administrativo",
      imagen: "imagen.jpg",
      estatus: "Inactivo"
    },
    {
      codigo: "3",
      nombre: "Pablo ",
      apellido: "Hernández",
      telefono: "2345678901",
      correo: "pablohernandez@mail.com",
      direccion: "Calle 3 #789, Ciudad",
      puesto: "Técnico de Soporte",
      imagen: "imagen.jpg",
      estatus: "activo"
    },
  ];
}
