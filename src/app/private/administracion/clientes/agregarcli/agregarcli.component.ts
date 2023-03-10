import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-agregarcli',
  templateUrl: './agregarcli.component.html',
  styleUrls: ['./agregarcli.component.css'],
})
export class AgregarcliComponent {
  constructor(private ServiceCli: ClientesService) { }
  file: any;
  clientes: any;
  cliente = {
    codigo: '',
    nombre: '',
    tipo: '',
    direccion: '',
    rfc: '',
    responsable: {
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
    },
    horario: {
      inicio: '',
      fin: '',
    },
    imagen: '',
    estatus: '',
  };

  fotoseleccionada(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
    }
  }
  guardarCli() {
    this.ServiceCli.guardar(
      this.cliente.codigo,
      this.cliente.nombre,
      this.cliente.tipo,
      this.cliente.direccion,
      this.cliente.rfc,
      this.cliente.responsable,
      this.cliente.horario,
      this.cliente.estatus,
      this.file
    ).subscribe((res) => {
      alert("Cliente agregado correctamente");
      this.limpiarCli();
      setTimeout(() => {
        location.reload();
      }, 3000);
    });
  } //Cierre del metodo guardarCli

  limpiarCli() {
    this.cliente.codigo = '';
    this.cliente.nombre = '';
    this.cliente.tipo = '';
    this.cliente.direccion = '';
    this.cliente.rfc = '';
    this.cliente.responsable.nombre = '';
    this.cliente.responsable.apellido = '';
    this.cliente.responsable.telefono = '';
    this.cliente.responsable.correo = '';
    this.cliente.horario.inicio = '';
    this.cliente.horario.fin = '';
    this.cliente.estatus = '';
    this.cliente.imagen = '';
  } //Cierre del metodo limpiarEmp
} //Cierre de la clase AgregarcliComponent
