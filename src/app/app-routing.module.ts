import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './users/login/login.component';
import { RegistroComponent } from './components/gabinete/registro/registro.component';
import { DetalleRegistroComponent } from './components/gabinete/detalle-registro/detalle-registro.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetalleGeneralComponent } from './components/admin/detalle-general/detalle-general.component';
import { NameComponent } from './users/name/name.component';
import {ModalRegistroComponent} from './components/gabinete/modal-registro/modal-registro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';


// Se importan los modulos de  los componentes



const routes: Routes = [

  {path: '', component: HomePageComponent },
  {path: 'admin/list' , component: DetalleGeneralComponent},
  {path: 'users/name' , component: NameComponent},
  {path: 'gabinete/detalle-registro' , component: DetalleRegistroComponent},
  {path: 'gabinete/registro' , component: RegistroComponent},
  {path: 'gabinete/mregistro' , component: ModalRegistroComponent },
  {path: 'users/login' , component: LoginComponent},

  {path: '**', component: Page404Component},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
