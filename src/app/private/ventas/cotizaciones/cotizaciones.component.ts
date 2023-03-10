import { Component } from '@angular/core';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent {
  consultarTodoCot() {

  }//Cierre del metodo consultarTodoEmp

  limpiarCot() {


  }//Cierre del metodo limpiarEmp

  cotizacions = [{
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
      participa: [
        "",
        "",
      ]
    },
    fecha: {
      recepcion: "",
      vigencia: ""
    },
    pago: "",
    servicios:
    {
      cantidad: "",
      imagen: "",
      descripcion: "",
      precio: "",
      subtotal: ""
    },
    productos:
    {
      cantidad: "",
      garantia: "",
      entrega: "",
      imagen: "",
      descripcion: "",
      precio: "",
      utilidad: "",
      importe: "",
      subtotal: "",
      proveedor: ""
    },
    total: "",
    notas: "",
    estatus: ""
  }];
}
