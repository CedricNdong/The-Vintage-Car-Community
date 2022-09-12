import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EinlagererComponent } from './einlagerer/einlagerer.component';
import { LagerhalterComponent } from './lagerhalter/lagerhalter.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EinlagererComponent,
    LagerhalterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProfileModule { }
