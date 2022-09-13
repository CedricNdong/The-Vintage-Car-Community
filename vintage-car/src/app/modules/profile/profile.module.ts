import { NgModule } from '@angular/core';
import { EinlagererComponent } from './einlagerer/einlagerer.component';
import { LagerhalterComponent } from './lagerhalter/lagerhalter.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EinlagererComponent,
    LagerhalterComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileModule { }
