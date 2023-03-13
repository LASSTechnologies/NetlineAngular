import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private url = 'http://localhost:3000/empleados';
  private urlUsu = 'http://localhost:3000/usuarios';
  constructor(private http: HttpClient) { }

  empleado = {
    codigo: "",
    nombre: "",
    apellido: "",
    puesto: "",
    telefono: "",
    correo: "",
    direccion: "",
    estatus: "",
    imgurl: "",

  }


  guardarUsu(usuario: object) {
    return this.http.post<any>(this.urlUsu, usuario);
  }

  guardar(
    codigo: string,
    nombre: string,
    apellido: string,
    puesto: string,
    telefono: string,
    correo: string,
    direccion: string,
    estatus: string,
    file: File
  ) {

    const fd = new FormData();
    fd.append("codigo", codigo);
    fd.append("nombre", nombre);
    fd.append("apellido", apellido);
    fd.append("puesto", puesto);
    fd.append("telefono", telefono);
    fd.append("correo", correo);
    fd.append("direccion", direccion);
    fd.append("estatus", estatus);
    fd.append("imagen", file);


    return this.http.post<any>(this.url, fd);
  }

  modificar(codigo: string,
    nombre: string,
    apellido: string,
    puesto: string,
    telefono: string,
    correo: string,
    direccion: string,
    estatus: string,
    file: File
  ) {

    const fd = new FormData();
    fd.append("codigo", codigo);
    fd.append("nombre", nombre);
    fd.append("apellido", apellido);
    fd.append("puesto", puesto);
    fd.append("telefono", telefono);
    fd.append("correo", correo);
    fd.append("direccion", direccion);
    fd.append("estatus", estatus);
    fd.append("imagen", file);


    return this.http.put<any>(this.url, fd);

  }

  eliminar(codigo: String) {

    return this.http.delete<any>(this.url + '/eliminar/' + codigo);

  }

  consultar(codigo: String) {

    return this.http.get<any>(this.url + '/datos/' + codigo);
  }

  consultarTodo() {

    return this.http.get<any>(this.url);

  }
}
