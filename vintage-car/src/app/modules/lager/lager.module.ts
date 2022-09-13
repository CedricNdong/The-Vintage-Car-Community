import { NgModule } from '@angular/core';
import { AddLagerComponent } from './add-lager/add-lager.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AddLagerComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class LagerModule { }
