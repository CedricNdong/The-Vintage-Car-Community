import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { VerifyEmailComponent } from './modules/auth/verify-email/verify-email.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LagerComponent } from './modules/einrichtung/lager/lager.component';
import { AddFahrzeugComponent } from './modules/fahrzeug/add-fahrzeug/add-fahrzeug.component';
import { FahrzeugComponent } from './modules/fahrzeug/fahrzeug/fahrzeug.component';
import { AddLagerComponent } from './modules/lager/add-lager/add-lager.component';
import { LagerhalterComponent } from './modules/profile/lagerhalter/lagerhalter.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SucheComponent } from './shared/suche/suche.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth/verify-email',
    component: VerifyEmailComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/signup',
    component: SignupComponent
  },
  {
    path: 'auth/forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'suche',
    component: SucheComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lager/add-lager',
    component: AddLagerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fahrzeug/add-fahrzeug',
    component: AddFahrzeugComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'einrichtung/lager/:id',
    component: LagerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fahrzeug/:id',
    component: FahrzeugComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
