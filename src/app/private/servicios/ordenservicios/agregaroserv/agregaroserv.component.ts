import { Component } from '@angular/core';

@Component({
  selector: 'app-agregaroserv',
  templateUrl: './agregaroserv.component.html',
  styleUrls: ['./agregaroserv.component.css']
})
export class AgregaroservComponent {

  orden = {
    codigo: "codigo",
    cliente: {
      empresa: "empresa",
      nombre: "nombre",
      telefono: "telefono",
      correo: "correo",
      direccion: "direccion",
    },
    empleado: {
      recibe: "recibe",
      participa: "participa",

    },
    fecha: {
      recepcion: "recepcion",
      atencion: "atencion"
    },
    horario: {
      inicio: "inicio",
      fin: "fin",
    },
    reporte: "reporte",
    trabajo: "trabajo",
    material:
    {
      nombre: "nombre",
      noParte: "noParte",
      descripcion: "descripcion",
      unidad: "unidad",
      cantidad: "cantidad"
    },
    notas: "notas",
    estatus: "estatus"
  }

  guardarOrd() {

  }//Cierre del metodo guardarEmp

}
