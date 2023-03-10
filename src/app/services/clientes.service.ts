import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
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
  private url = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) {} //Cierre del constructor
  guardar(
    codigo: string,
    nombre: string,
    tipo: string,
    direccion: string,
    rfc: string,
    responsable: {
      nombre: string;
      apellido: string;
      telefono: string;
      correo: string;
    },
    horario: {
      inicio: string;
      fin: string;
    },
    estatus: string,
    file: File
  ) {
    const fd = new FormData();
    fd.append('codigo', codigo);
    fd.append('nombre', nombre);
    fd.append('tipo', tipo);
    fd.append('direccion', direccion);
    fd.append('rfc', rfc);
    fd.append('responsable[nombre]', responsable.nombre);
    fd.append('responsable[apellido]', responsable.apellido);
    fd.append('responsable[telefono]', responsable.telefono);
    fd.append('responsable[correo]', responsable.correo);
    fd.append('horario[inicio]', horario.inicio);
    fd.append('horario[fin]', horario.fin);
    fd.append('estatus', estatus);
    fd.append('imagen', file);
    return this.http.post(this.url, fd);
  }

<<<<<<< HEAD
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
  private url = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) { } //Cierre del constructor
  guardar(
    codigo: string,
    nombre: string,
    tipo: string,
    direccion: string,
    rfc: string,
    responsable: {
      nombre: string;
      apellido: string;
      telefono: string;
      correo: string;
    },
    horario: {
      inicio: string;
      fin: string;
    },
    estatus: string,
    file: File
  ) {
    const fd = new FormData();
    fd.append('codigo', codigo);
    fd.append('nombre', nombre);
    fd.append('tipo', tipo);
    fd.append('direccion', direccion);
    fd.append('rfc', rfc);
    fd.append('responsable[nombre]', responsable.nombre);
    fd.append('responsable[apellido]', responsable.apellido);
    fd.append('responsable[telefono]', responsable.telefono);
    fd.append('responsable[correo]', responsable.correo);
    fd.append('horario[inicio]', horario.inicio);
    fd.append('horario[fin]', horario.fin);
    fd.append('estatus', estatus);
    fd.append('imagen', file);
    return this.http.post(this.url, fd);
  }

=======
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a
  modificar(
    codigo: string,
    nombre: string,
    tipo: string,
    direccion: string,
    rfc: string,
    responsable: {
      nombre: string;
      apellido: string;
      telefono: string;
      correo: string;
    },
    horario: {
      inicio: string;
      fin: string;
    },
    estatus: string,
    file: File
  ) {
    const fd = new FormData();
    fd.append('codigo', codigo);
    fd.append('nombre', nombre);
    fd.append('tipo', tipo);
    fd.append('direccion', direccion);
    fd.append('rfc', rfc);
    fd.append('responsable[nombre]', responsable.nombre);
    fd.append('responsable[apellido]', responsable.apellido);
    fd.append('responsable[telefono]', responsable.telefono);
    fd.append('responsable[correo]', responsable.correo);
    fd.append('horario[inicio]', horario.inicio);
    fd.append('horario[fin]', horario.fin);
    fd.append('estatus', estatus);
    fd.append('imagen', file);
    return this.http.put(this.url, fd);
  }

  eliminar(codigo: string) {
    return this.http.delete<any>(this.url + '/eliminar/' + codigo);
  }

  consultar(codigo: string) {
    return this.http.get<any>(this.url + '/datos/' + codigo);
  }

  consultarTodo() {
    return this.http.get<any>(this.url);
  }
}
