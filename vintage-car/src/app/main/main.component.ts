import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  opened: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset) // Keeps Sidenave responsive
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  sections = { // Sections in sidenave menu
    dashboard: 'dashboard',
    lager: 'einrichtung/lager/:id',
    fahrzeug: 'fahrzeug/:id',
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService) { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }

}
