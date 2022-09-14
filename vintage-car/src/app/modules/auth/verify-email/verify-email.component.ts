import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  user: any;

  constructor(public authService: AuthService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras?.state as { user: any };
    this.user = state?.user;
  }

  ngOnInit(): void {
  }

  // navigates to dashboard component
  dashboard() {
    this.router.navigate(['dashboard']);
  }

}
