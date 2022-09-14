import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {

  }

  login() {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
  }

  // navigates to signup component
  signup() {
    this.router.navigate(['auth/signup']);
  }

  // navigates to forgot-password component
  forgotPassword() {
    this.router.navigate(['auth/forgot-password']);
  }
}
