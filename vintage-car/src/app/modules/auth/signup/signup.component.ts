import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupApplication, User, UserRole } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  roles = Object.values(UserRole);

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  // navigates to login component
  login() {
    this.router.navigate(['auth/login']);
  }

  register() {
    // include the user role while registering a new account
    const user: SignupApplication = {
      email: this.signupForm.value.email,
      username: this.signupForm.value.name,
      password: this.signupForm.value.password,
      role: this.signupForm.value.role,
    }

    this.authService.register(user)
  }

}
