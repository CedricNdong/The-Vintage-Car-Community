import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SucheComponent } from './suche/suche.component';


const MATERIAL_MODULES = [
  MatToolbarModule,
  BrowserAnimationsModule,
  LayoutModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule
]

@NgModule({
  declarations: [
    SucheComponent
  ],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ]
})
export class SharedModule { }
