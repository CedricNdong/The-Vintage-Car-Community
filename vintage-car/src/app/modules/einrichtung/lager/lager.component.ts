import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  Kapazitaet: number;
  Service: string;
  Spezialgebiet : string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', Kapazitaet: 1, Service: 'H' ,Spezialgebiet : 'Spezialgebiet' },
  {position: 2, name: 'Hydrogen', Kapazitaet: 1, Service: 'H' ,Spezialgebiet : 'Spezialgebiet' },
  {position: 3, name: 'Hydrogen', Kapazitaet: 1, Service: 'H' ,Spezialgebiet : 'Spezialgebiet' }]

@Component({
  selector: 'app-lager',
  templateUrl: './lager.component.html',
  styleUrls: ['./lager.component.css']
})
export class LagerComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'Kapazitaet', 'Service' , 'Spezialgebiet' ,'actions' ];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }
  add() : void{
    console.log("this is add ");
  }


  save() : void{
    console.log("this is speichern");
  }

  remove(o) : void{
    const index = this.dataSource.indexOf(o);
    console.log(index)
    this.dataSource.splice(index, 1);

    console.log("this is remove");
  }
  edit() : void{
    console.log("this is edit");
  }

}
