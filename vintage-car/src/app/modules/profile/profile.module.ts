import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EinlagererComponent } from './einlagerer/einlagerer.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EinlagererComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProfileModule { }
