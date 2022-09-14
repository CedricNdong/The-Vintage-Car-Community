import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface service{
  nr : number
  service_name: string;
}
export interface angebot{
  anbieter : string;
}

const ELEMENT_DATA: service[] = [
  {nr:1,service_name:"einschweißen"},
  {nr:2,service_name:"einschweißen"},
  {nr:3,service_name:"einschweißen"},
  {nr:4,service_name:"einschweißen"},
];
@Component({
  selector: 'app-lager',
  templateUrl: './lager.component.html',
  styleUrls: ['./lager.component.css']
})
export class LagerComponent implements OnInit {

  lager : any={};
  user: any = {};

  constructor() {
    authService.userData$.subscribe(user => this.lager.userId = user?.uid);
    });



  displayedColumns: string[] = [ 'Nr','service','buchen' ];
  dataSource = ELEMENT_DATA ;
   angeboten : string[] =["lager1","lager2"];

  ngOnInit(): void {

  }


}

