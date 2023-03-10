import { Component } from '@angular/core';

@Component({
  selector: 'app-dimensionamientos',
  templateUrl: './dimensionamientos.component.html',
  styleUrls: ['./dimensionamientos.component.css']
})
export class DimensionamientosComponent {
  consultarTodoDim() {

  }//Cierre del metodo consultarTodoEmp

  limpiarDim() {


  }//Cierre del metodo limpiarEmp

  dimens = [{
    codigo: "",
    nombre: "",
    cliente: {
      empresa: "",
      nombre: "",
      telefono: "",
      correo: "",
      direccion: "",
    },
    empleado: {
      recibe: "",
      participa: "",
    },
    fecha: {
      recepcion: "",
      atencion: ""
    },
    hora: "",
    reporte: "",
    descripción: "",
    servicios:
    {
      nombre: "",
      categoria: "",
      descripcion: ""
    },
    material:
    {
      nombre: "",
      noParte: "",
      descripcion: "",
      unidad: "",
      cantidad: ""
    },
    dias: "",
    horario: "",
    peronal: "",
    notas: "",
    estatus: ""
  }];
}
