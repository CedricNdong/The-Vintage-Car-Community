import { NgModule } from '@angular/core';
import { FahrzeugComponent } from './fahrzeug/fahrzeug.component';
import { AddFahrzeugComponent } from './add-fahrzeug/add-fahrzeug.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FahrzeugComponent,
    AddFahrzeugComponent
  ],
  imports: [
    SharedModule
  ]
})
export class FahrzeugModule { }
