import { Component } from '@angular/core';

@Component({
  selector: 'app-agregardimen',
  templateUrl: './agregardimen.component.html',
  styleUrls: ['./agregardimen.component.css']
})
export class AgregardimenComponent {
  dimen = {
    codigo: "codigo",
    nombre: "nombre",
    cliente: {
      empresa: "empresacli",
      nombre: "nombrecli",
      telefono: "telcli",
      correo: "correoCli",
      direccion: "direccionCli",
    },
    empleado: {
      recibe: "recibe",
      participa: "participa",
    },
    fecha: {
      recepcion: "recepcion",
      atencion: "atencion"
    },
    hora: "hora",
    reporte: "reporte",
    descripcion: "descripcion",
    servicios:
    {
      nombre: "nombreSer",
      categoria: "categoriaSer",
      descripcion: "descripcionSer"
    },
    material:
    {
      nombre: "nombreMateri",
      noParte: "NoParte",
      descripcion: "descripcionMat",
      unidad: "unidadMat",
      cantidad: "cantidadMat"
    },
    dias: "dias",
    horario: "horas",
    peronal: "personal",
    notas: "notas",
    estatus: "estatus"
  }

  guardarDim() {

  }//Cierre del metodo guardarEmp
}
