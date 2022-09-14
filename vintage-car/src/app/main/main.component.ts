import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../shared/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common'
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
  private history: string[] = [] // Keep track of navigation stack

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private location: Location,
    private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  navigateBack() {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl('/')
    }
  }

  logout() {
    this.authService.logout();
  }

}
