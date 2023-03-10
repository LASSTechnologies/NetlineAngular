import { Component } from '@angular/core';
<<<<<<< HEAD
import { ProveedoresService } from 'src/app/services/proveedores.service';
=======
import { FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../../../services/proveedores.service';
import { Router } from '@angular/router';
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a

@Component({
  selector: 'app-consultarprov',
  templateUrl: './consultarprov.component.html',
  styleUrls: ['./consultarprov.component.css'],
})
export class ConsultarprovComponent {
  constructor(public ServiceProveedor: ProveedoresService) {}
  proveedores: any = [];
  proveedor = {
    codigo: '',
    nombre: '',
    direccion: '',
    telefono: '',
    correo: '',
  };

  consultarPro() {
    this.ServiceProveedor.consultar(this.proveedor.codigo).subscribe(
      (res) => {
        this.ServiceProveedor.proveedor.codigo = res.proveedor.codigo;
        this.ServiceProveedor.proveedor.nombre = res.proveedor.nombre;
        this.ServiceProveedor.proveedor.direccion = res.proveedor.direccion;
        this.ServiceProveedor.proveedor.telefono = res.proveedor.telefono;
        this.ServiceProveedor.proveedor.correo = res.proveedor.correo;
      },
      (err) => {
        console.log(err);
      }
    );
    this.limpiarServiceProv();
  } //Cierre del metodo consultarEmp

  modificarPro() {
    this.ServiceProveedor.modificar(this.ServiceProveedor.proveedor).subscribe(
      (res) => {
        alert('Proveedor modificado con éxito');
        this.limpiarProv();
        location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  } //Cierre del metodo modificarEmp

  eliminarPro(codigo: string) {
    this.ServiceProveedor.eliminar(codigo).subscribe(
      (res: any) => {
        alert('Proveedor eliminado con éxito');
        this.limpiarProv();
        location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  } //Cierre del metodo eliminarEmp

  limpiarProv() {
    this.proveedor.codigo = '';
    this.proveedor.nombre = '';
    this.proveedor.direccion = '';
    this.proveedor.telefono = '';
    this.proveedor.correo = '';
  } //Cierre del metodo limpiarEmp

  limpiarServiceProv() {
    this.ServiceProveedor.proveedor.codigo = '';
    this.ServiceProveedor.proveedor.nombre = '';
    this.ServiceProveedor.proveedor.direccion = '';
    this.ServiceProveedor.proveedor.telefono = '';
    this.ServiceProveedor.proveedor.correo = '';
  } //Cierre del metodo limpiarEmp
}
