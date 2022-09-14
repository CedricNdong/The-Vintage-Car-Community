import { NgModule } from '@angular/core';
import { FahrzeugComponent } from './fahrzeug/fahrzeug.component';
<<<<<<< HEAD
import {MatTableModule} from "@angular/material/table";
=======
import { AddFahrzeugComponent } from './add-fahrzeug/add-fahrzeug.component';
import { SharedModule } from 'src/app/shared/shared.module';
>>>>>>> main



@NgModule({
  declarations: [
    FahrzeugComponent,
    AddFahrzeugComponent
  ],
  imports: [
<<<<<<< HEAD
    CommonModule,
=======
    SharedModule
>>>>>>> main
  ]
})
export class FahrzeugModule { }
