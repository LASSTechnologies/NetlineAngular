import { Component } from '@angular/core';
<<<<<<< HEAD
import { ClientesService } from 'src/app/services/clientes.service';
=======
import { FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a

@Component({
  selector: 'app-agregarcli',
  templateUrl: './agregarcli.component.html',
  styleUrls: ['./agregarcli.component.css'],
})
export class AgregarcliComponent {
<<<<<<< HEAD
  constructor(private ServiceCli: ClientesService) { }
=======
  constructor(private ServiceCli: ClientesService) {}
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a
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
<<<<<<< HEAD
      alert("Cliente agregado correctamente");
=======
      const alerta = document.querySelector('.alert')!;
      alerta.textContent = 'Cliente agregado correctamente';
      alerta.classList.remove('d-none');
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a
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
<<<<<<< HEAD
} //Cierre de la clase AgregarcliComponent
=======
} //Cierre de la clase AgregarcliComponent
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a
