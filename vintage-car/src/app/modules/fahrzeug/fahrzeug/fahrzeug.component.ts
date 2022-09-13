import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fahrzeug } from '../../../shared/models/fahrzeug.model';

@Component({
  selector: 'app-fahrzeug',
  templateUrl: './fahrzeug.component.html',
  styleUrls: ['./fahrzeug.component.css']
})
export class FahrzeugComponent implements OnInit {
  fahrzeugCollection: AngularFirestoreCollection<Fahrzeug>;
  fahrzeugSubject: BehaviorSubject<Fahrzeug> = new BehaviorSubject<Fahrzeug>(null);
  fahrzeug$: Observable<Fahrzeug> = this.fahrzeugSubject.asObservable();
  docRef: DocumentReference<unknown>;

  constructor(private router: Router,
    private fireStore: AngularFirestore) {

    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras?.state as { docRef: DocumentReference<unknown> };
    this.docRef = state?.docRef;
    this.fahrzeug$ = fireStore.doc<Fahrzeug>(`fahrzeug/${this.docRef?.id}`).valueChanges();
  }

  ngOnInit(): void {
  }

}
