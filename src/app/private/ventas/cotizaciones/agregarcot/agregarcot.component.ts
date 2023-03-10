import { Component } from '@angular/core';

@Component({
  selector: 'app-agregarcot',
  templateUrl: './agregarcot.component.html',
  styleUrls: ['./agregarcot.component.css']
})
export class AgregarcotComponent {
  cotizacion = {
    codigo: "codigo",
    nombre: "nombre",
    cliente: {
      empresa: "empresaCli",
      nombre: "nombreCli",
      telefono: "telefonoCli",
      correo: "correoCli",
      direccion: "direccionCli",
    },
    empleado: {
      recibe: "recibeEmp",
      participa: "participaEmp",
    },
    fecha: {
      recepcion: "recepcion",
      vigencia: "vigencia"
    },
    pago: "pago",
    servicios:
    {
      cantidad: "cantidadSer",
      imagen: "Imagen",
      descripcion: "descripcionSer",
      precio: "precioSer",
      subtotal: "subtotalSer"
    },
    productos:
    {
      cantidad: "cabtidadPro",
      garantia: "garantia",
      entrega: "entrega",
      imagen: "image",
      descripcion: "descripcionProd",
      precio: "precioPro",
      utilidad: "utilidadpro",
      importe: "importe",
      subtotal: "subtotalProd",
      proveedor: "provedorPro"
    },
    total: "total",
    notas: "notas",
    estatus: "estatus"
  }

  guardarCot() {

  }//Cierre del metodo guardarEmp
}
