import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;

  constructor(public authService: AuthService, private router: Router) {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['auth/login']);
  }

  resetPassword() {
    this.authService
      .forgotPassword(this.resetPasswordForm.value.email);
  }
}
