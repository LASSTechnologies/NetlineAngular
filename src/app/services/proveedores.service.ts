import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  proveedor = {
    codigo: '',
    nombre: '',
    direccion: '',
    telefono: '',
    correo: '',
  };
  private url = 'http://localhost:3000/proveedores';
  constructor(private http: HttpClient) {}

  guardar(
    codigo: string,
    nombre: string,
    direccion: string,
    telefono: string,
    correo: string
  ) {
    const proveedor = {
      codigo: codigo,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      correo: correo,
    };
    return this.http.post(this.url, proveedor);
  }

  consultarTodo() {
    return this.http.get<any>(this.url);
  }

  consultar(codigo: string) {
    return this.http.get<any>(this.url + '/datos/' + codigo);
  }

  eliminar(codigo: string) {
    return this.http.delete<any>(this.url + '/eliminar/' + codigo);
  }

  modificar(proveedor: object) {
    return this.http.put(this.url, proveedor);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> c0173844d7191f0f0964b9645b1e3605ce5cb22a
