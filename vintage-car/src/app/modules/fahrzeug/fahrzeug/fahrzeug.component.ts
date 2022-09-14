import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Fahrzeug } from '../../../shared/models/fahrzeug.model';

@Component({
  selector: 'app-fahrzeug',
  templateUrl: './fahrzeug.component.html',
  styleUrls: ['./fahrzeug.component.css']
})
export class FahrzeugComponent implements OnInit {
  fahrzeugCollection: AngularFirestoreCollection<Fahrzeug>;
  fahrzeuge$: Observable<Fahrzeug[]>;

  constructor(private angularFireStore: AngularFirestore) {
    this.fahrzeugCollection = this.angularFireStore
      .collection('fahrzeug');
    this.fahrzeuge$ = this.fahrzeugCollection.valueChanges();
  }

  ngOnInit(): void {
    
  }
  

}
