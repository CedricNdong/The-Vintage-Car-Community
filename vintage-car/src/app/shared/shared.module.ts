import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SucheComponent } from './suche/suche.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

const MATERIAL_MODULES = [
  CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  FormsModule,
  ReactiveFormsModule,
  MatCardModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatGridListModule,
  MatMenuModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [
    SucheComponent
  ],
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES]
})
export class SharedModule { }
