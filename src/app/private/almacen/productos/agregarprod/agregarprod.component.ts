import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-agregarprod',
  templateUrl: './agregarprod.component.html',
  styleUrls: ['./agregarprod.component.css']
})
export class AgregarprodComponent {
  constructor(
    private ServicePro: ProductosService,
    private ServiceProv: ProveedoresService
  ) { } //Cierre del constructor
  file: any;
  productos: any;
  proveedores: any;
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

  ngOnInit(): void {
    this.ServiceProv.consultarTodo().subscribe((res) => {
      this.proveedores = res;
    });
  }

  fotoSeleccionada(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
    }
  }

  guardarProd() {
    this.ServicePro.guardar(
      this.producto.codigo,
      this.producto.nombre,
      this.producto.noParte,
      this.producto.proveedores,
      this.producto.tipo,
      this.producto.categoria,
      this.producto.descripcion,
      this.producto.unidad,
      this.producto.precio,
      this.producto.existencia,
      this.file
    ).subscribe((res) => {
      alert('Producto agregado');
      this.limpiarProd();
      location.reload();
    });
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

