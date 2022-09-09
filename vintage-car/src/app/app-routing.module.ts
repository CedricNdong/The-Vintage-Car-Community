import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LagerComponent } from './modules/einrichtung/lager/lager.component';
import { FahrzeugComponent } from './modules/fahrzeug/fahrzeug/fahrzeug.component';
import { EinlagererComponent } from './modules/profile/einlagerer/einlagerer.component';
import { LagerhalterComponent } from './modules/profile/lagerhalter/lagerhalter.component';

const routes: Routes = [
  {
    path : 'profile/lagerhalter',
    component: LagerhalterComponent
  },
  {
    path : 'profile/einlagerer',
    component: EinlagererComponent
  },
  {
    path : 'einrichtung/lager',
    component: LagerComponent
  },
  {
    path : 'fahrzeug',
    component: FahrzeugComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
