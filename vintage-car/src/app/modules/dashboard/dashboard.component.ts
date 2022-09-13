import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/shared/models/user.model';
import { AuthService } from "../../shared/services/auth.service";
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  roles = UserRole;
  role: UserRole;
  lagerCollection: AngularFirestoreCollection<unknown>;
  lager$: Observable<any>;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          // { title: 'Card 2', cols: 1, rows: 1 },
          // { title: 'Card 3', cols: 1, rows: 1 },
          // { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        // { title: 'Card 2', cols: 1, rows: 1 },
        // { title: 'Card 3', cols: 1, rows: 2 },
        // { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(
    public authService: AuthService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private angularFireStore: AngularFirestore) {
    this.role = authService.getCurrentUserRole();
    this.lagerCollection = this.angularFireStore
      .collection('lager');
    this.lager$ = this.lagerCollection.valueChanges();
  }

  ngOnInit(): void {
  }

  addLager() {
    this.authService.userData$.subscribe(user =>
      this.router.navigate(['lager/add-lager'], { state: { user: user } })
    );
  }

  addFahrzeug() {

  }

}
