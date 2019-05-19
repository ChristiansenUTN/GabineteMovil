import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogged: boolean;
  public isAdmin: boolean;
  public emailUsuario: string;
  public email: string;
  public pass: string;
  public name: string;

  constructor(

    public afAuth: AngularFireAuth,
    public router: Router,
    public authService: AuthService,


  ) { }






  ngOnInit() {


    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        console.log(this.isLogged);
        this.emailUsuario = auth.email;
        if (this.emailUsuario == 'admin@moron.gob.ar') {

          this.isAdmin = true;
          console.log('Esadmin', this.isAdmin);
        } else {

          this.isAdmin = false;
          console.log('Esadmin', this.isAdmin);
        }






      } else {

        this.isLogged = false;


      }
    });



  }


  onLogin(): void {



    this.authService.loginEmailUser(this.email, this.pass)
      .then((res) => {
        alert('El usuario se logueo con exito');

        if (this.email == 'admin@moron.gob.ar') {

          this.router.navigate(['/admin/list']);

        } else {

          this.router.navigate(['/users/name']);

        }


        }).catch((err) => {
          console.log(err);

          alert('Usuario no registrado. Verifique Mail y Password');
          this.authService.logOut();
          this.router.navigate(['/']);
        });



  }

}
