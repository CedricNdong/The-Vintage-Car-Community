import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LagerComponent } from './lager/lager.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    LagerComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatListModule
  ]
})
export class EinrichtungModule { }
