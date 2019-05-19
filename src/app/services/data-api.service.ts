import { detalleCalle } from './../models/calles';
import { detalleVisitas } from './../models/vecinos';
import { Injectable } from '@angular/core';
import { map, } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/observable';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';






@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  newsRef: AngularFireList<any>;

  constructor(

    private afs: AngularFirestore,
    private afs2: AngularFirestore


  ) {

    this.visitascollection = afs.collection<detalleVisitas>('Visitas');
    this.visitas = this.visitascollection.valueChanges();

    this.callescollection = afs2.collection<detalleCalle>('Calles');
    this.calle = this.callescollection.valueChanges();


  }

  public visitascollection: AngularFirestoreCollection<detalleVisitas>;
  public visitas: Observable<detalleVisitas[]>;





  public callescollection: AngularFirestoreCollection<detalleCalle>;
  public calle: Observable<detalleCalle[]>;




  public fechaActual = new Date();


  getAllRequest() {

    return this.visitas = this.visitascollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as detalleVisitas;
        data.id = action.payload.doc.id;
        console.log('DATAID', data);
        return data;
      });
    }));





  }


  // Se aplica el filtro por los datos pasados desde localstorage.

  applyFilter(ugc, dni) {

    console.log('DNI LLEGADA', dni);
    console.log('ugc LLEGADA', ugc);


    this.visitascollection = this.afs.collection('Visitas', ref => ref
      .orderBy('calle')
      .where('ugc', '==', ugc)
      // tslint:disable-next-line: radix
      .where('dni', '==', parseInt(dni))
      .limit(5)




    );

  }


  createContact(calleIngresada, alturaIngresada) {

    console.log('CreateCalle', calleIngresada);
    console.log('CreateCalle', alturaIngresada);
    const dniReg = parseInt(localStorage.getItem('dni_uss'));
    console.log('dniof', dniReg.valueOf);

    return this.visitascollection.add({

      ugc: localStorage.getItem('ugc'),
      calle: calleIngresada,
      altura: alturaIngresada,
      contactado: false,
      usuario: localStorage.getItem('User'),
      fechavisita: this.fechaActual,
      visitador: localStorage.getItem('Visitador'),
      dni: dniReg,





    }

    );


  }

  // Boorra registro de Visisita ingresado por el usuario.

  deleteUser(userkey) {

    console.log('DeleteId', userkey);

    return this.afs.collection('Visitas').doc(userkey).delete();


  }

  // Buscamos todas las calles

  getCalles() {

    return this.calle = this.callescollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const dataCalle = action.payload.doc.data() as detalleCalle;
        dataCalle.id = action.payload.doc.id;
        console.log('CalleID', dataCalle);
        return dataCalle;
      });
    }));





  }














}








