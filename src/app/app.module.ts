import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

//Pipetas 
import { BuscarPipe } from './pipe/buscar.pipe';
import { EstatusPipe } from './pipe/estatus.pipe';

//Listado de servicios 
import { ClientesService } from 'src/app/services/clientes.service';
import { EmpleadosService } from './services/empleados.service';
import { ProveedoresService } from './services/proveedores.service';
import { ProductosService } from './services/productos.service';
import { ServiciosService } from './services/servicios.service';
import { CotizacionesService } from './services/cotizaciones.service';
import { OrdenesservicioService } from './services/ordenesservicio.service';
import { DimensionamientosService } from './services/dimensionamientos.service';
import { HttpClientModule } from '@angular/common/http';
             
//Listado de componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { InicioComponent } from './private/inicio/inicio.component';
import { ClientComponent } from './client/client.component';
import { AdministracionComponent } from './private/administracion/administracion.component';
import { VentasComponent } from './private/ventas/ventas.component';
import { AlmacenComponent } from './private/almacen/almacen.component';
import { ServiciosComponent } from './private/servicios/servicios.component';
import { ClientesComponent } from './private/administracion/clientes/clientes.component';
import { EmpleadosComponent } from './private/administracion/empleados/empleados.component';
import { ProveedoresComponent } from './private/almacen/proveedores/proveedores.component';
import { ProductosComponent } from './private/almacen/productos/productos.component';
import { ServiciosAlmComponent } from './private/almacen/servicios/servicios.component';
import { CatalogoComponent } from './private/almacen/catalogo/catalogo.component';
import { CotizacionesComponent } from './private/ventas/cotizaciones/cotizaciones.component';
import { OrdenserviciosComponent } from './private/servicios/ordenservicios/ordenservicios.component';
import { DimensionamientosComponent } from './private/servicios/dimensionamientos/dimensionamientos.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { NavbarComponent } from './private/dashboard/navbar/navbar.component';
import { FooterComponent } from './private/dashboard/footer/footer.component';
import { HeaderComponent } from './private/dashboard/header/header.component';

//Empleado
import { ConsultarempComponent } from './private/administracion/empleados/consultaremp/consultaremp.component';
import { AgregarempComponent } from './private/administracion/empleados/agregaremp/agregaremp.component';
import { EliminarempComponent } from './private/administracion/empleados/eliminaremp/eliminaremp.component';
//Cliente
import { ConsultarcliComponent } from './private/administracion/clientes/consultarcli/consultarcli.component';
import { AgregarcliComponent } from './private/administracion/clientes/agregarcli/agregarcli.component';
import { EliminarcliComponent } from './private/administracion/clientes/eliminarcli/eliminarcli.component';
//Proveedor
import { ConsultarprovComponent } from './private/almacen/proveedores/consultarprov/consultarprov.component';
import { AgregarprovComponent } from './private/almacen/proveedores/agregarprov/agregarprov.component';
//import { EliminarprovComponent } from './private/almacen/proveedores/eliminarprov/eliminarprod.component';
//Producto
import { ConsultarprodComponent } from './private/almacen/productos/consultarprod/consultarprod.component';
import { AgregarprodComponent } from './private/almacen/productos/agregarprod/agregarprod.component';
import { EliminarprodComponent } from './private/almacen/productos/eliminarprod/eliminarprod.component';
//Sericio
import { ConsultarservComponent } from './private/almacen/servicios/consultarserv/consultarserv.component';
import { AgregarservComponent } from './private/almacen/servicios/agregarserv/agregarserv.component';
import { EliminarservComponent } from './private/almacen/servicios/eliminarserv/eliminarserv.component';
//Cotizaciones 
import { AgregarcotComponent } from './private/ventas/cotizaciones/agregarcot/agregarcot.component';
import { ConsultarcotComponent } from './private/ventas/cotizaciones/consultarcot/consultarcot.component';
import { EliminarcotComponent } from './private/ventas/cotizaciones/eliminarcot/eliminarcot.component';
import { ExportarcotComponent } from './private/ventas/cotizaciones/exportarcot/exportarcot.component';
//Orden servicio
import { AgregaroservComponent } from './private/servicios/ordenservicios/agregaroserv/agregaroserv.component';
import { ConsultaroservComponent } from './private/servicios/ordenservicios/consultaroserv/consultaroserv.component';
import { EliminaroservComponent } from './private/servicios/ordenservicios/eliminaroserv/eliminaroserv.component';
import { ExportaroservComponent } from './private/servicios/ordenservicios/exportaroserv/exportaroserv.component';
//Dimensionamiento
import { AgregardimenComponent } from './private/servicios/dimensionamientos/agregardimen/agregardimen.component';
import { ConsultardimenComponent } from './private/servicios/dimensionamientos/consultardimen/consultardimen.component';
import { EliminardimenComponent } from './private/servicios/dimensionamientos/eliminardimen/eliminardimen.component';
import { ExportardimenComponent } from './private/servicios/dimensionamientos/exportardimen/exportardimen.component';

import { ConsultarcatComponent } from './private/almacen/catalogo/consultarcat/consultarcat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrivateComponent,
    InicioComponent,
    ClientComponent,
    AdministracionComponent,
    VentasComponent,
    AlmacenComponent,
    ServiciosComponent,
    ClientesComponent,
    EmpleadosComponent,
    ProveedoresComponent,
    ProductosComponent,
    ServiciosAlmComponent,
    CatalogoComponent,
    CotizacionesComponent,
    OrdenserviciosComponent,
    DimensionamientosComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ConsultarempComponent,
    AgregarempComponent,
    EliminarempComponent,
    ConsultarcliComponent,
    AgregarcliComponent,
    EliminarcliComponent,
    ConsultarprovComponent,
    AgregarprovComponent,
    EliminarprodComponent,
    ConsultarprodComponent,
    AgregarprodComponent,
    ConsultarservComponent,
    AgregarservComponent,
    EliminarservComponent,
    ConsultarcatComponent,
    AgregarcotComponent,
    ConsultarcotComponent,
    EliminarcotComponent,
    ExportarcotComponent,
    AgregaroservComponent,
    ConsultaroservComponent,
    EliminaroservComponent,
    ExportaroservComponent,
    AgregardimenComponent,
    ConsultardimenComponent,
    EliminardimenComponent,
    ExportardimenComponent,
    BuscarPipe,
    EstatusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    ClientesService,
    EmpleadosService,
    ProveedoresService,
    ProductosService,
    ServiciosService,
    CotizacionesService,
    OrdenesservicioService,
    DimensionamientosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
