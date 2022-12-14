import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { Kondition, Lager } from 'src/app/shared/models/lager.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-lager',
  templateUrl: './add-lager.component.html',
  styleUrls: ['./add-lager.component.css']
})
export class AddLagerComponent implements OnInit {

  addLagerForm: FormGroup<any>;
  konditionen = Object.values(Kondition);
  lager: any = {};

  constructor(
    private router: Router,
    private authService: AuthService,
    private fireStore: AngularFirestore) {

    authService.userData$
      .subscribe(user => this.lager.halterId = user?.uid);

    this.lager.konditionen = [];
    this.lager.ort = {};

    this.addLagerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      strasse: new FormControl('', [Validators.required]),
      hausnummer: new FormControl('', [Validators.required]),
      plz: new FormControl('', [Validators.required]),
      stadt: new FormControl('', [Validators.required]),
      bundesland: new FormControl('', [Validators.required]),
      einlagerungsbetrag: new FormControl('', [Validators.required]),
      kapazitaet: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  updateKonditionen(event: MatCheckboxChange, kondition: Kondition) {
    if (event.checked) {
      this.lager.konditionen.push(kondition);
    } else {
      this.lager.konditionen = this.lager.konditionen
        .filter(currentKondition => currentKondition !== kondition);
    }
  }

  addLager() {
    const lagerForm = this.addLagerForm.value;
    this.lager.freiePlaetze = lagerForm.kapazitaet;
    this.fireStore.collection('lager')
      .add(this.lager)
      .then(docRef => {
        this.router.navigate(['dashboard']);
      });
  }

}
