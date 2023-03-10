import { Component } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-agregarprov',
  templateUrl: './agregarprov.component.html',
  styleUrls: ['./agregarprov.component.css'],
})
export class AgregarprovComponent {
  constructor(private ServiceProveedor: ProveedoresService) {}
  proveedores: any;
  proveedor = {
    codigo: '',
    nombre: '',
    direccion: '',
    telefono: '',
    correo: '',
  };

  guardarProv() {
    this.ServiceProveedor.guardar(
      this.proveedor.codigo,
      this.proveedor.nombre,
      this.proveedor.direccion,
      this.proveedor.telefono,
      this.proveedor.correo
    ).subscribe(
      (res) => {
        alert('Proveedor agregado con éxito');
        this.limpiarProv();
        location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  limpiarProv() {
    this.proveedor.codigo = '';
    this.proveedor.nombre = '';
    this.proveedor.direccion = '';
    this.proveedor.telefono = '';
    this.proveedor.correo = '';
  } //Cierre del metodo limpiarEmp
}
