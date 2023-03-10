import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenservicios',
  templateUrl: './ordenservicios.component.html',
  styleUrls: ['./ordenservicios.component.css']
})
export class OrdenserviciosComponent {
  consultarTodoOrd() {

  }//Cierre del metodo consultarTodoEmp

  limpiarOrd() {


  }//Cierre del metodo limpiarEmp

  ordens = [{
    codigo: "",
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
    horario: {
      inicio: "",
      fin: "",
    },
    reporte: "",
    trabajo: "",
    material:
    {
      nombre: "",
      noParte: "",
      descripcion: "",
      unidad: "",
      cantidad: ""
    },
    notas: "",
    estatus: ""
  }];
}
