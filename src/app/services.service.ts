import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private frt: AngularFirestore) {
  }
  add(nombre: String, plataforma: String, img: String, description: String, tipo: String) {
    console.log('aca');

    this.frt.collection('/lenguajes').add({
      name: nombre,
      plataforma: plataforma,
      img: img,
      description: description,
      tipo: tipo
    });
  }

  list() {
    return this.frt.collection('/lenguajes').snapshotChanges();
  }

}
