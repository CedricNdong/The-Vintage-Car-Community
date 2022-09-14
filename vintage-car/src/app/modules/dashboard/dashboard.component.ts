import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/shared/models/user.model';
import { AuthService } from "../../shared/services/auth.service";
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  roles = UserRole;
  dataCollection: AngularFirestoreCollection<unknown>;
  data$: Observable<DocumentChangeAction<any>[]>;
  snapshot: any;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'ObjekteVerwalten', cols: 1, rows: 1 },
          // { title: 'Card 2', cols: 1, rows: 1 },
          // { title: 'Card 3', cols: 1, rows: 1 },
          // { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'ObjekteVerwalten', cols: 2, rows: 1 },
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

    authService.userData$
      .subscribe(user => {
        const userId = this.authService.userData?.uid;
        if (user?.role === UserRole.Lagerhalter) {
          this.dataCollection = this.angularFireStore
            .collection('lager', ref => {
              return ref.where('halterId', '==', userId);
            })
          this.data$ = this.dataCollection.snapshotChanges();
        } else {
          this.dataCollection = this.angularFireStore
            .collection('fahrzeug', ref => {
              return ref.where('userId', '==', userId);
            })
          this.data$ = this.dataCollection.snapshotChanges();
        }
      });
  }

  ngOnInit(): void {
  }

  navLager(lagerId: string) {
    this.router.navigate([`einrichtung/lager/${lagerId}`], { state: { docRef: { id: lagerId } } })
  }

  navFahrzeug(fahrzeugId: string) {
    this.router.navigate([`fahrzeug/${fahrzeugId}`], { state: { docRef: { id: fahrzeugId } } })
  }

  addLager(): void {
    this.authService.userData$
      .subscribe(user =>
        this.router.navigate(['lager/add-lager'], { state: { user: user } })
      );
  }

  addFahrzeug(): void {
    this.authService.userData$
      .subscribe(user =>
        this.router.navigate(['fahrzeug/add-fahrzeug'], { state: { user: user } })
      );
  }

}
