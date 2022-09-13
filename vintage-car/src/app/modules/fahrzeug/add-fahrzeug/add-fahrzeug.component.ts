import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FahrzeugKategorie, Fahrzeugmarke } from 'src/app/shared/models/fahrzeug.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-fahrzeug',
  templateUrl: './add-fahrzeug.component.html',
  styleUrls: ['./add-fahrzeug.component.css']
})
export class AddFahrzeugComponent implements OnInit {
  addFahrzeugForm: FormGroup<any>;
  fahrzeug: any = {};
  user: any = {};
  marken = Object.values(Fahrzeugmarke);
  kategorien = Object.values(FahrzeugKategorie);


  constructor(
    private router: Router,
    private authService: AuthService,
    private fireStore: AngularFirestore) {

    authService.userData$
      .subscribe(user => this.fahrzeug.userId = user?.uid);

    this.addFahrzeugForm = new FormGroup({
      kategorie: new FormControl('', [Validators.required]),
      marke: new FormControl('', [Validators.required]),
      modell: new FormControl('', []),
      anmerkung: new FormControl('', []),
    });
  }

  ngOnInit(): void {
  }

  addFahrzeug() {
    this.fireStore.collection('fahrzeug')
      .add(this.fahrzeug)
      .then(ref => {
        this.router.navigate([`fahrzeug/${ref.id}`]), { state: { docRef: ref } };
      });
  }

}
