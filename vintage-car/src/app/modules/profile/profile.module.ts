import { NgModule } from '@angular/core';
import { EinlagererComponent } from './einlagerer/einlagerer.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EinlagererComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileModule { }
