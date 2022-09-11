import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EinlagererComponent } from './einlagerer/einlagerer.component';
import { LagerhalterComponent } from './lagerhalter/lagerhalter.component';



@NgModule({
  declarations: [
    EinlagererComponent,
    LagerhalterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
