import { Component } from '@angular/core';
import { ControlAccesoESPService } from 'src/app/services/control-acceso-esp.service';

@Component({
  selector: 'app-controlacceso',
  templateUrl: './controlacceso.component.html',
  styleUrls: ['./controlacceso.component.css']
})
export class ControlaccesoComponent {

  constructor(private ServicioESP: ControlAccesoESPService) {
  }

  cochera(accion: string) {
    if (accion == "abrir") {
      this.ServicioESP.abrirCochera().subscribe((res) => { }, (err) => { });
    } else if (accion == "cerrar") {
      this.ServicioESP.cerrarCochera().subscribe((res) => { }, (err) => { });
    }
  }

  puerta() {
    this.ServicioESP.abrirPuerta().subscribe((res) => { }, (err) => { });
  }

  alarma(accion: string) {
    if (accion == "activar") {
      this.ServicioESP.activarAlarma().subscribe((res) => { }, (err) => { });
    } else if (accion == "desactivar") {
      this.ServicioESP.desactivarAlarma().subscribe((res) => { }, (err) => { });
    }
  }

  iluminacion(accion: string) {
    if (accion == "encender") {
      this.ServicioESP.encenderIluminacion().subscribe((res) => { }, (err) => { });
    } else if (accion == "apagar") {
      this.ServicioESP.apagarIluminacion().subscribe((res) => { }, (err) => { });
    }
  }
}
