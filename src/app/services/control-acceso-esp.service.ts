import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlAccesoESPService {

  private urlESP = "http://192.168.90.56/";

  constructor(private http: HttpClient) { }

  //http://192.168.137.181/cochera&accion=cerrar
  abrirCochera() {
    return this.http.get<any>(this.urlESP + "cochera&accion=abrir");
  }

  cerrarCochera() {
    return this.http.get<any>(this.urlESP + "cochera&accion=cerrar");
  }

  abrirPuerta(){
    return this.http.get<any>(this.urlESP + "puerta&accion=abrir");
  }

  activarAlarma(){
    return this.http.get<any>(this.urlESP + "alarma&accion=activar");
  }

  desactivarAlarma(){
    return this.http.get<any>(this.urlESP + "alarma&accion=desactivar");
  }

  encenderIluminacion(){
    return this.http.get<any>(this.urlESP + "iluminacion&accion=encender");
  }

  apagarIluminacion(){
    return this.http.get<any>(this.urlESP + "iluminacion&accion=apagar");
  }
}
