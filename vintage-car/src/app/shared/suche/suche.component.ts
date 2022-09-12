import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';


export interface ErgebnisElement {
  name: string;
  anschrift: string;
  kapazitaet: string;
  kosten: number;
}




const SUCH_DATA: ErgebnisElement[] = [
  { name: '24/7 geöffnet', anschrift: 'Peter Straße 2, 61169 Friedberg',kapazitaet: '24/7 geöffnet', kosten: 25 },

];


@Component({
  selector: 'app-suche',
  templateUrl: './suche.component.html',
  styleUrls: ['./suche.component.css']
})
export class SucheComponent implements OnInit {


  stadtList = [
    { stadtName: 'Berlin'},
    { stadtName: 'Hamburg'},
    { stadtName: 'München'},
    { stadtName: 'Köln'},
    { stadtName: 'Frankfurt am Main'},
    { stadtName: 'Stuttgart'},
    { stadtName: 'Düsseldorf'},
    { stadtName: 'Leipzig'},
    { stadtName: 'Essen'},
    { stadtName: 'Bremen'},
    { stadtName: 'Dresden'},
    { stadtName: 'Hannover'},
    { stadtName: 'Nürnberg'},
    { stadtName: 'Duisburg'}
];

fahrzeugList = [
  { fahrzeugMarke: 'Porsche'},
  { fahrzeugMarke: 'Bugatti'},
  { fahrzeugMarke: 'Volkswagen'},
  { fahrzeugMarke: 'Mercedes Benz'},
  { fahrzeugMarke: 'BMW'},
  { fahrzeugMarke: 'Audi'},
  { fahrzeugMarke: 'Opel'},
  { fahrzeugMarke: 'Skoda'},
  { fahrzeugMarke: 'Ford'}
];


  displayedColumns: string[] = ['name','anschrift', 'kapazitaet', 'kosten'];
  suchergebnisse = SUCH_DATA;
  suchForm: FormGroup;

    // Für die Suchergebnisse
suchStatus: boolean;



  constructor() {
    this.suchForm = new FormGroup({
      stadt: new FormControl('', [Validators.required]),
      fahrzeug: new FormControl('', [Validators.required])
    });


   }





 zeigeSuchErgebnis() {
    const searchParameters = this.suchForm.value.stadt;

    if (searchParameters === 'Berlin') {
      console.log(searchParameters);
      return (this.suchStatus = true);
      
    } else {
      return (this.suchStatus = false);
      console.log('NNOO');

      
    }

}



 

  ngOnInit(): void {
  }

}
