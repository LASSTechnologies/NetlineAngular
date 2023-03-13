import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  sesion = {
    nombre: localStorage.getItem("nombre"),
    apellido: localStorage.getItem("apellido"),
    puesto: localStorage.getItem("puesto"),
    imagen: localStorage.getItem("imagen")
  }

}
