import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LagerComponent } from './lager/lager.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    LagerComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ]
})
export class EinrichtungModule { }
