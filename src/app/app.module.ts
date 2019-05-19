import { DataApiService } from './services/data-api.service';
import { AuthService } from 'src/app/services/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegistroComponent } from './components/gabinete/registro/registro.component';
import { DetalleRegistroComponent } from './components/gabinete/detalle-registro/detalle-registro.component';
import { DetalleGeneralComponent } from './components/admin/detalle-general/detalle-general.component';
import { Page404Component } from './components/page404/page404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NameComponent } from './users/name/name.component';
import { ModalRegistroComponent } from './components/gabinete/modal-registro/modal-registro.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from './../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    RegistroComponent,
    DetalleRegistroComponent,
    DetalleGeneralComponent,
    Page404Component,
    NavbarComponent,
    NameComponent,
    ModalRegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,




  ],
  providers: [AngularFireAuth, AuthService, AngularFirestore, DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
