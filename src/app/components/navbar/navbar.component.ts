import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { storage } from 'firebase';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  public isLogged: boolean;
  public isAdmin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fecha: Date;
  nombreUss = this.nombreUsuario;
  userData: any;

  constructor(

    public authService: AuthService,
    public router: Router


  ) { }

  public app_name: string = 'GabineteMovil';

  ngOnInit() {

    this.fecha = new Date();
    console.log('Fecha', this.fecha);

    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        console.log(this.isLogged);
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        if (this.emailUsuario == 'admin@moron.gob.ar') {

          this.isAdmin = true;
          console.log('Esadmin', this.isAdmin);
        } else {

          switch(this.emailUsuario){

            case ('ugc1@moron.gob.ar'):
            console.log('ugc', this.emailUsuario);
            localStorage.setItem('ugc', 'UGC1');
            break;

            case ('ugc2@moron.gob.ar'):
            console.log('ugc', this.emailUsuario);
            localStorage.setItem('ugc', 'UGC2');
            break;

            case ('ugc3@moron.gob.ar'):
            console.log('ugc', this.emailUsuario);
            localStorage.setItem('ugc', 'UGC3');
            break;

            case ('ugc4@moron.gob.ar'):
            console.log('ugc', this.emailUsuario);
            localStorage.setItem('ugc', 'UGC4');
            break;

            case ('ugc5@moron.gob.ar'):
            console.log('ugc', this.emailUsuario);
            localStorage.setItem('ugc', 'UGC5');
            break;


            case ('ugc6@moron.gob.ar'):
            console.log('ugc', this.emailUsuario);
            localStorage.setItem('ugc', 'UGC6');
            break;


            case ('ugc7@moron.gob.ar'):
            console.log('ugc', this.emailUsuario);
            localStorage.setItem('ugc', 'UGC7');
            break;






          }

          localStorage.setItem('User', this.emailUsuario);

          this.isAdmin = false;
          console.log('Esadmin', this.isAdmin);
        }






      } else {

        this.isLogged = false;


      }
    });



  }   // Fin OnInit

  async onLogout() {

    await this.authService.logOut();
    alert('Vuelve Pronto !!');
    localStorage.clear();
    this.router.navigate(['/']);
    this.emailUsuario = null;
    this.isLogged = false;
  }


}
