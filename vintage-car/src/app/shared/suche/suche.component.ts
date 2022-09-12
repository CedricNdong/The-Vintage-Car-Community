import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared.module';


export interface PeriodicElement {
  merkmale: string;
  anschrift: string;
  service: string;
  kondition: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {anschrift: 'Peter Straße 2, 61169 Friedberg', merkmale: '24/7 geöffnet', service: '24/7 geöffnet', kondition: 'genug Geld verfügen'},

];

@Component({
  selector: 'app-suche',
  templateUrl: './suche.component.html',
  styleUrls: ['./suche.component.css']
})
export class SucheComponent implements OnInit {

  displayedColumns: string[] = ['anschrift', 'merkmale', 'service', 'kondition'];
  dataSource = ELEMENT_DATA;



  constructor() { }

  ngOnInit(): void {
  }

}
