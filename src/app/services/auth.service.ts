import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,


  ) { }




  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));

    });



  }


  logOut() {

    return this.afAuth.auth.signOut();

  }


  getAuth() {

    return this.afAuth.authState.pipe(map(auth => auth));
  }










}



