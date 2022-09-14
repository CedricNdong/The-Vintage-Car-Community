import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/shared/models/user.model';
import { AuthService } from "../../shared/services/auth.service";
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  roles = UserRole;

  dataCollection: AngularFirestoreCollection<unknown>; // Represent the collection of Lager/Fahrzeug
  data$: Observable<DocumentChangeAction<any>[]>; // Lager/Fahrzeug to be renderd in the view

  dataIsEmptySubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
  dataIsEmpty$: Observable<boolean> = this.dataIsEmptySubject.asObservable(); // indicates to the view wether there are Lager/Fahrzeug to be renderd
  snapshot: any;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'ObjekteVerwalten', cols: 1, rows: 2 },
        ];
      }

      return [
        { title: 'ObjekteVerwalten', cols: 2, rows: 2 },
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
        if (user?.role === UserRole.Lagerhalter) {  // get Lager list if logged in user is an Einlagerer
          this.dataCollection = this.angularFireStore
            .collection('lager', ref => {
              return ref.where('halterId', '==', userId);
            })
          this.data$ = this.dataCollection.snapshotChanges();
          this.data$
            .subscribe(data => this.dataIsEmptySubject.next(!!data[0]));
        } else { // get Fahrzeug list if logged in user is an Einlagerer
          this.dataCollection = this.angularFireStore
            .collection('fahrzeug', ref => {
              return ref.where('userId', '==', userId);
            })
          this.data$ = this.dataCollection.snapshotChanges();
          this.data$
            .subscribe(data => this.dataIsEmptySubject.next(!!data[0]));
        }
      });
  }

  ngOnInit(): void {
  }

  // navigates to lager component and view it's information
  navLager(lagerId: string) {
    this.router.navigate([`einrichtung/lager/${lagerId}`], { state: { docRef: { id: lagerId } } })
  }

  // navigates to fahrzeug component and view it's information
  navFahrzeug(fahrzeugId: string) {
    this.router.navigate([`fahrzeug/${fahrzeugId}`], { state: { docRef: { id: fahrzeugId } } })
  }

  // navigates to add-lager component/form
  addLager(): void {
    this.authService.userData$
      .subscribe(user =>
        this.router.navigate(['lager/add-lager'])
      );
  }

  // navigates to add-fahrzeug component/form
  addFahrzeug(): void {
    this.authService.userData$
      .subscribe(user =>
        this.router.navigate(['fahrzeug/add-fahrzeug'], { state: { user: user } })
      );
  }

}
