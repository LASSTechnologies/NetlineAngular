import { Component } from '@angular/core';
<<<<<<< HEAD
import { ClientesService } from 'src/app/services/clientes.service';
=======
import { FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a

@Component({
  selector: 'app-consultarcli',
  templateUrl: './consultarcli.component.html',
  styleUrls: ['./consultarcli.component.css'],
})
export class ConsultarcliComponent {
  constructor(public ServiceCli: ClientesService) {}
  file: any;
  clientes: any = [];
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

  consultarCli() {
    this.ServiceCli.consultar(this.cliente.codigo).subscribe(
      (res) => {
        this.ServiceCli.cliente.codigo = res.cliente.codigo;
        this.ServiceCli.cliente.nombre = res.cliente.nombre;
        this.ServiceCli.cliente.tipo = res.cliente.tipo;
        this.ServiceCli.cliente.direccion = res.cliente.direccion;
        this.ServiceCli.cliente.rfc = res.cliente.rfc;
        this.ServiceCli.cliente.responsable.nombre =
          res.cliente.responsable.nombre;
        this.ServiceCli.cliente.responsable.apellido =
          res.cliente.responsable.apellido;
        this.ServiceCli.cliente.responsable.telefono =
          res.cliente.responsable.telefono;
        this.ServiceCli.cliente.responsable.correo =
          res.cliente.responsable.correo;
        this.ServiceCli.cliente.horario.inicio = res.cliente.horario.inicio;
        this.ServiceCli.cliente.horario.fin = res.cliente.horario.fin;
        this.ServiceCli.cliente.imagen = res.cliente.imagen;
        this.ServiceCli.cliente.estatus = res.cliente.estatus;
      },
      (err) => {
        console.log(err);
        if (typeof err.error === 'string') {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
        this.limpiarCliServicio();
      }
    );
  } //Cierre del metodo consultarCli

  ngOnInit(): void {}

  modificarCli() {
    this.ServiceCli.modificar(
      this.ServiceCli.cliente.codigo,
      this.ServiceCli.cliente.nombre,
      this.ServiceCli.cliente.tipo,
      this.ServiceCli.cliente.direccion,
      this.ServiceCli.cliente.rfc,
      this.ServiceCli.cliente.responsable,
      this.ServiceCli.cliente.horario,
      this.ServiceCli.cliente.estatus,
      this.file
    ).subscribe(
      (res) => {
        alert('Cliente modificado correctamente');
        this.limpiarCliServicio();
        location.reload();
      },
      (err) => {
        console.log(err);
        if (typeof err.error === 'string') {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
        this.limpiarCliServicio();
      }
    );
  } //Cierre del metodo modificarCli

  eliminarCli(codigo: string) {
    this.ServiceCli.eliminar(codigo).subscribe(
      (res) => {
        alert('Cliente eliminado');
        this.limpiarCli();
        location.reload();
      },
      (err) => {
        console.log(err);
        if (typeof err.error === 'string') {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
      }
    );
  }

  limpiarCliServicio() {
    this.ServiceCli.cliente.codigo = '';
    this.ServiceCli.cliente.nombre = '';
    this.ServiceCli.cliente.tipo = '';
    this.ServiceCli.cliente.direccion = '';
    this.ServiceCli.cliente.rfc = '';
    this.ServiceCli.cliente.responsable.nombre = '';
    this.ServiceCli.cliente.responsable.apellido = '';
    this.ServiceCli.cliente.responsable.telefono = '';
    this.ServiceCli.cliente.responsable.correo = '';
    this.ServiceCli.cliente.horario.inicio = '';
    this.ServiceCli.cliente.horario.fin = '';
    this.ServiceCli.cliente.imagen = '';
    this.ServiceCli.cliente.estatus = '';
  }

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
    this.cliente.imagen = '';
    this.cliente.estatus = '';
  }
}
