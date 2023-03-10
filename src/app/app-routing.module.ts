import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importación de componentes
//Componentes parte administrativa
import { PrivateComponent } from './private/private.component';
import { InicioComponent } from './private/inicio/inicio.component';
import { AdministracionComponent } from './private/administracion/administracion.component';
import { EmpleadosComponent } from './private/administracion/empleados/empleados.component';
import { ClientesComponent } from './private/administracion/clientes/clientes.component';
import { AlmacenComponent } from './private/almacen/almacen.component';
import { ProveedoresComponent } from './private/almacen/proveedores/proveedores.component';
import { ProductosComponent } from './private/almacen/productos/productos.component';
import { ServiciosAlmComponent } from './private/almacen/servicios/servicios.component';
import { CatalogoComponent } from './private/almacen/catalogo/catalogo.component';
import { VentasComponent } from './private/ventas/ventas.component';
import { CotizacionesComponent } from './private/ventas/cotizaciones/cotizaciones.component';
import { ServiciosComponent } from './private/servicios/servicios.component';
import { OrdenserviciosComponent } from './private/servicios/ordenservicios/ordenservicios.component';
import { DimensionamientosComponent } from './private/servicios/dimensionamientos/dimensionamientos.component';
//Componentes parte cliente
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  {
    path: "private", component: PrivateComponent, children: [
      { path: "inicio", component: InicioComponent },
      {
        path: "administracion", component: AdministracionComponent, children: [
          { path: "empleados", component: EmpleadosComponent },
          { path: "clientes", component: ClientesComponent }
        ]
      },
      {
        path: "almacen", component: AlmacenComponent, children: [
          { path: "proveedores", component: ProveedoresComponent },
          { path: "productos", component: ProductosComponent },
          { path: "servicios", component: ServiciosAlmComponent },
          { path: "catalogo", component: CatalogoComponent }
        ]
      },
      {
        path: "ventas", component: VentasComponent, children: [
          { path: "cotizaciones", component: CotizacionesComponent }
        ]
      },
      {
        path: "servicios", component: ServiciosComponent, children: [
          { path: "ordenesservicio", component: OrdenserviciosComponent },
          { path: "dimensionamientos", component: DimensionamientosComponent }
        ]
      }
    ]
  },
  { path: "client", component: ClientComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
