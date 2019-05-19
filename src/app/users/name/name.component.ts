import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  public name: string;
  public dni: number;

  constructor(

    public router: Router,

  ) { }

  ngOnInit() {






  }



  userChequed(){

    console.log('nombre', this.name);
    localStorage.setItem('Visitador', this.name);
    localStorage.setItem('dni_uss', this.dni.toString() );
    this.router.navigate(['/gabinete/registro']);



  }








}




