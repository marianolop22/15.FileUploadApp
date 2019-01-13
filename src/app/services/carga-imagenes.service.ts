import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor( private db: AngularFirestore ) { }

  private guardarImagen ( imagen: { nombre: string, url:string } ) {
    this.db.collection (`/${this.CARPETA_IMAGENES} ` )
      .add ( imagen );
  }

  public cargarImagenesFirebase ( imagenes: FileItem[] ) {
    console.log (imagenes);


  }



}
