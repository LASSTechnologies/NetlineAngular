import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor(private ServiceCli: ClientesService) { }
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

  ngOnInit(): void {
    this.consultarTodoCli();
  }

  p: number = 1;
  nPag:number=0;
  buscarTexto='';
  buscarEstatus='';

  consultarTodoCli() {
    this.ServiceCli.consultarTodo().subscribe((res: any) => {
      this.clientes = res;
    });
  }

  consultarCli(codigo: string) {
    this.ServiceCli.consultar(codigo).subscribe(
      (res) => {
        this.ServiceCli.cliente.codigo = res.cli.codigo;
        this.ServiceCli.cliente.nombre = res.cli.nombre;
        this.ServiceCli.cliente.tipo = res.cli.tipo;
        this.ServiceCli.cliente.direccion = res.cli.direccion;
        this.ServiceCli.cliente.rfc = res.cli.rfc;
        this.ServiceCli.cliente.responsable.nombre = res.cli.responsable.nombre;
        this.ServiceCli.cliente.responsable.apellido =
          res.cli.responsable.apellido;
        this.ServiceCli.cliente.responsable.telefono =
          res.cli.responsable.telefono;
        this.ServiceCli.cliente.responsable.correo = res.cli.responsable.correo;
        this.ServiceCli.cliente.horario.inicio = res.cli.horario.inicio;
        this.ServiceCli.cliente.horario.fin = res.cli.horario.fin;
        this.ServiceCli.cliente.imagen = res.cli.imagen;
        this.ServiceCli.cliente.estatus = res.cli.estatus;
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

  eliminarCli(codigo: string) {
    this.ServiceCli.eliminar(codigo).subscribe(
      (res) => {
        this.consultarTodoCli();
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
