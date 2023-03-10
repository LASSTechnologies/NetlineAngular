import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-consultarprod',
  templateUrl: './consultarprod.component.html',
  styleUrls: ['./consultarprod.component.css']
})
export class ConsultarprodComponent {
  constructor(public ServicePro: ProductosService) {}
  file: any;
  productos: any = [];
  producto = {
    codigo: '',
    nombre: '',
    noParte: '',
    proveedores: '',
    tipo: '',
    categoria: '',
    descripcion: '',
    unidad: '',
    precio: '',
    existencia: '',
    imagen: '',
  };

  fotoSeleccionada(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
    }
  }

  consultarProd() {
    this.ServicePro.consultar(this.producto.codigo).subscribe(
      (res) => {
        this.ServicePro.producto.codigo = res.producto.codigo;
        this.ServicePro.producto.nombre = res.producto.nombre;
        this.ServicePro.producto.noParte = res.producto.noParte;
        this.ServicePro.producto.proveedores = res.producto.proveedores;
        this.ServicePro.producto.tipo = res.producto.tipo;
        this.ServicePro.producto.categoria = res.producto.categoria;
        this.ServicePro.producto.descripcion = res.producto.descripcion;
        this.ServicePro.producto.unidad = res.producto.unidad;
        this.ServicePro.producto.precio = res.producto.precio;
        this.ServicePro.producto.existencia = res.producto.existencia;
        this.ServicePro.producto.imagen = res.producto.imagen;
      },
      (err) => {
        console.log(err);
        if (typeof err.error === 'string') {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
        this.limpiarProdServicio();
      }
    );
  }

  modificarProd() {
    this.ServicePro.modificar(
      this.ServicePro.producto.codigo,
      this.ServicePro.producto.nombre,
      this.ServicePro.producto.noParte,
      this.ServicePro.producto.proveedores,
      this.ServicePro.producto.tipo,
      this.ServicePro.producto.categoria,
      this.ServicePro.producto.descripcion,
      this.ServicePro.producto.unidad,
      this.ServicePro.producto.precio,
      this.ServicePro.producto.existencia,
      this.file
    ).subscribe(
      (res) => {
        alert('Producto modificado correctamente');
        this.limpiarProdServicio();
        location.reload();
      },
      (err) => {
        console.log(err);
        if (typeof err.error === 'string') {
          alert(err.error);
        } else {
          alert(err.error.error[0].msg);
        }
        this.limpiarProdServicio();
      }
    );
  }

  eliminarProd(codigo: string) {
    this.ServicePro.eliminar(codigo).subscribe(
      (res) => {
        alert('Producto eliminado correctamente');
        this.limpiarProd();
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

  limpiarProdServicio() {
    this.ServicePro.producto.codigo = '';
    this.ServicePro.producto.nombre = '';
    this.ServicePro.producto.noParte = '';
    this.ServicePro.producto.proveedores = '';
    this.ServicePro.producto.tipo = '';
    this.ServicePro.producto.categoria = '';
    this.ServicePro.producto.descripcion = '';
    this.ServicePro.producto.unidad = '';
    this.ServicePro.producto.precio = '';
    this.ServicePro.producto.existencia = '';
    this.ServicePro.producto.imagen = '';
  }

  limpiarProd() {
    this.producto.codigo = '';
    this.producto.nombre = '';
    this.producto.noParte = '';
    this.producto.proveedores = '';
    this.producto.tipo = '';
    this.producto.categoria = '';
    this.producto.descripcion = '';
    this.producto.unidad = '';
    this.producto.precio = '';
    this.producto.existencia = '';
    this.producto.imagen = '';
  }
}
