import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lager } from 'src/app/shared/models/lager.model';
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
  lagerSubject: BehaviorSubject<Lager> = new BehaviorSubject<Lager>(null);
  lager$: Observable<Lager> = this.lagerSubject.asObservable();

  constructor(private router: Router,
    private fireStore: AngularFirestore) {

    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras?.state as { docRef: DocumentReference<unknown> };
    this.docRef = state?.docRef;
    const fahrzeugId = this.docRef ? this.docRef?.id : router.url.substring(10);

    this.fahrzeug$ = fireStore.doc<Fahrzeug>(`fahrzeug/${fahrzeugId}`).valueChanges();

    const lagerCollection = this.fireStore.collection<Lager>('lager');
    const lager$ = lagerCollection.snapshotChanges();
    lager$.subscribe((docActions) => {
      let lager: any;
      lager = docActions.map((docAction) => ({
        id: docAction.payload.doc.id,
        ...docAction.payload.doc.data(),
      } as Lager));

      lager = lager
        .filter((lager: Lager) => lager
          .stellplaetze?.some(stellplatz => stellplatz.fahrzeugId == fahrzeugId))[0];
      this.lagerSubject.next(lager);
    });
  }


  ngOnInit(): void {
  }

  searchLager() {
    throw new Error('Method not implemented.');
  }

  navLager(lagerId: string) {
    this.router.navigate([`einrichtung/lager/${lagerId}`])
  }
}
