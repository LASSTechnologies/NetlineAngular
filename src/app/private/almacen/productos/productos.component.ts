import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private ServicePro: ProductosService) { } //Cierre del constructor
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

  p: number = 1;
  nPag: number = 0;
  buscarTexto = '';
  buscarEstatus = '';

  ngOnInit(): void {
    this.consultarTodoProd();
  }

  consultarTodoProd() {
    this.ServicePro.consultarTodo().subscribe((res: any) => {
      this.productos = res;
    });
  }

  consultarProd(codigo: string) {
    this.ServicePro.consultar(codigo).subscribe(
      (res) => {
        this.ServicePro.producto.codigo = res.prod.codigo;
        this.ServicePro.producto.nombre = res.prod.nombre;
        this.ServicePro.producto.noParte = res.prod.noParte;
        this.ServicePro.producto.proveedores = res.prod.proveedores;
        this.ServicePro.producto.tipo = res.prod.tipo;
        this.ServicePro.producto.categoria = res.prod.categoria;
        this.ServicePro.producto.descripcion = res.prod.descripcion;
        this.ServicePro.producto.unidad = res.prod.unidad;
        this.ServicePro.producto.precio = res.prod.precio;
        this.ServicePro.producto.existencia = res.prod.existencia;
        this.ServicePro.producto.imagen = res.prod.imagen;
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
        this.consultarTodoProd();
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
  } //Cierre del metodo limpiarEmp
}
