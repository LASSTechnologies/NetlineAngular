import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
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
  private url = 'http://localhost:3000/productos';
  constructor(private http: HttpClient) { }

  guardar(
    codigo: string,
    nombre: string,
    noParte: string,
    proveedores: string,
    tipo: string,
    categoria: string,
    descripcion: string,
    unidad: string,
    precio: string,
    existencia: string,
    file: File
  ) {
    const fd = new FormData();
    fd.append('codigo', codigo);
    fd.append('nombre', nombre);
    fd.append('noParte', noParte);
    fd.append('proveedores', proveedores);
    fd.append('tipo', tipo);
    fd.append('categoria', categoria);
    fd.append('descripcion', descripcion);
    fd.append('unidad', unidad);
    fd.append('precio', precio);
    fd.append('existencia', existencia);
    fd.append('imagen', file);
    return this.http.post(this.url, fd);
  }

  modificar(
    codigo: string,
    nombre: string,
    noParte: string,
    proveedores: string,
    tipo: string,
    categoria: string,
    descripcion: string,
    unidad: string,
    precio: string,
    existencia: string,
    file: File
  ) {
    const fd = new FormData();
    fd.append('codigo', codigo);
    fd.append('nombre', nombre);
    fd.append('noParte', noParte);
    fd.append('proveedores', proveedores);
    fd.append('tipo', tipo);
    fd.append('categoria', categoria);
    fd.append('descripcion', descripcion);
    fd.append('unidad', unidad);
    fd.append('precio', precio);
    fd.append('existencia', existencia);
    fd.append('imagen', file);
    return this.http.put(this.url, fd);
  }

  consultarTodo() {
    return this.http.get(this.url);
  }

  consultar(codigo: string) {
    return this.http.get<any>(this.url + '/datos/' + codigo);
  }

  eliminar(codigo: string) {
    return this.http.delete(this.url + '/eliminar' + codigo);
  }
}
