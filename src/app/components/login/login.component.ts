import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { StorageService } from '../../core/auth/storage.service';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
} from '@angular/forms';
import { UserRoleService } from '../../core/auth/user-role.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private loginService: LoginService,
    private storageService: StorageService,
    private router: Router,
    private _formbuilder: UntypedFormBuilder,
    private userRole: UserRoleService
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formbuilder.group({
      username: [''],
      password: [''],
    });
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    // const { username, password } = this.form;
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    // console.log(username, password);
    this.loginService.login(username, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        console.log(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log(this.roles);
        // this.reloadPage();
        console.log('Received token:', data.token);
        this.storageService.saveBearerToken(data.token);
        this.redirectToDashboard(this.roles);
      },

      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }

  private redirectToDashboard(roles: string[]): void {
    
    // Redirect based on role
    if (roles.includes("ROLE_ADMIN")) {
      this.router.navigate(['/admin/dashboard']);
    } else if (roles.includes("ROLE_MODERATOR")) {
      this.router.navigate(['/moderator-dashboard']);
    } else {
      this.router.navigate(['/patient/patient-dashboard']);
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
