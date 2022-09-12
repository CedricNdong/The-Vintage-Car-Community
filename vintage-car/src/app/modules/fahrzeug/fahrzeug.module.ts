import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahrzeugComponent } from './fahrzeug/fahrzeug.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    FahrzeugComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class FahrzeugModule { }
