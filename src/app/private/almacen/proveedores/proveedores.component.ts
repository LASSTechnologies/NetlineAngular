import { Component } from '@angular/core';
<<<<<<< HEAD
import { ProveedoresService } from 'src/app/services/proveedores.service';
=======
import { FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Router } from '@angular/router';
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
<<<<<<< HEAD
  constructor(private ServiceProveedor: ProveedoresService) { }
=======
  constructor(private ServiceProveedor: ProveedoresService) {}
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a
  proveedores: any = [];
  proveedor = {
    codigo: '',
    nombre: '',
    direccion: '',
    telefono: '',
    correo: '',
  };

<<<<<<< HEAD
  p: number = 1;
  nPag:number=0;
  buscarTexto='';
  buscarEstatus='';

=======
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a
  ngOnInit(): void {
    this.consultarTodoProveedores();
  }

  consultarTodoProveedores() {
    this.ServiceProveedor.consultarTodo().subscribe((res: any) => {
      this.proveedores = res;
    });
  }

  consultarProv(codigo: string) {
    this.ServiceProveedor.consultar(codigo).subscribe(
      (res) => {
        this.ServiceProveedor.proveedor.codigo = res.prov.codigo;
        this.ServiceProveedor.proveedor.nombre = res.prov.nombre;
        this.ServiceProveedor.proveedor.direccion = res.prov.direccion;
        this.ServiceProveedor.proveedor.telefono = res.prov.telefono;
        this.ServiceProveedor.proveedor.correo = res.prov.correo;
      },
      (err) => {
        console.log(err);
        if (typeof err.error === 'string') {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
        this.limpiarProServicio();
      }
    );
  }

  eliminarPro(codigo: string) {
    this.ServiceProveedor.eliminar(codigo).subscribe(
      (res) => {
        this.consultarTodoProveedores();
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

  limpiarProServicio() {
    this.ServiceProveedor.proveedor.codigo = '';
    this.ServiceProveedor.proveedor.nombre = '';
    this.ServiceProveedor.proveedor.direccion = '';
    this.ServiceProveedor.proveedor.telefono = '';
    this.ServiceProveedor.proveedor.correo = '';
  }

  limpiarPro() {
    this.proveedor.codigo = '';
    this.proveedor.nombre = '';
    this.proveedor.direccion = '';
    this.proveedor.telefono = '';
    this.proveedor.correo = '';
  } //Cierre del metodo limpiarEmp
<<<<<<< HEAD
}
=======
}
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a
