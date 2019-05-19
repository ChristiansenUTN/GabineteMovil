import { DataApiService } from './../../../services/data-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatAutocomplete, MatInputModule } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Options } from 'selenium-webdriver/chrome';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  constructor(

    public router: Router,
    public authService: AuthService,
    private dataapi: DataApiService,

  ) { }



  public calleIngresada: string;
  public alturaIngresada: number;
  public ugcstorage: string;
  public dnistorage: string;
  public mailstorage: string;
  public visitador: string;
  public visitas = [];
  public visita = '';

  public calles = [];
  public calle = '';


  ngOnInit() {




    this.visitador = localStorage.getItem('Visitador');
    this.ugcstorage = localStorage.getItem('ugc');
    this.dnistorage = localStorage.getItem('dni_uss');

    console.log('LocalStorage', this.ugcstorage);
    console.log('LocalStorage2', this.dnistorage);

    // aplicamos el filtro a la consulta


    this.dataapi.applyFilter(this.ugcstorage, this.dnistorage);





    // Traemos todos los datos que primero pasaron por el filtro

    this.dataapi.getAllRequest().subscribe(Visitas => {

      console.log('REQUEST', Visitas);

      this.visitas = Visitas;


    });





  }



  // Llamamos al Modal para verificar los datos

  addContact(route, pepe) {

    console.log('pepe', pepe);

    this.calleIngresada = route;
    this.alturaIngresada = pepe;

    console.log('calle', this.calleIngresada);
    console.log('altura', this.alturaIngresada);



  }

  saveContact() {

    this.dataapi.createContact(this.calleIngresada, this.alturaIngresada).then(

      res => {


        document.getElementById('cerrarModal').click();
        document.getElementById('altura').focus();


        console.log(res);

      }, err => {

        console.log(err);


      });

  }

  delete(id) {

    if (confirm('Estas seguro de borrar el registro?')) {
      this.dataapi.deleteUser(id)
        .then(
          () => {
            this.router.navigate(['/gabinete/registro']);
          },
          err => {
            console.log(err);
          }
        )
    }

  }

  // hacmeos la consulta que trae todas las calles

  async filtroCalle() {
    console.log('filstrando calle');
    let calleLargo = ((<HTMLInputElement>document.getElementById('calle')).value);
    console.log('tamaño calle', calleLargo.length);
    if (calleLargo.length > 2) {
      this.dataapi.getCalles().subscribe(Calles => {



        console.log('CalleRegistro', Calles);
        this.calles = Calles;

      });


    }


  }

  // Mostramos de la lista de calles la elegida

  choice(idcalle) {

    console.log('Choice', idcalle);



  }





}









