import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../core/auth/account.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
  };
  success = false;

  registerForm = new FormGroup({
    login: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.pattern(
          '^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'
        ),
      ],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(254),
        Validators.email,
      ],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ],
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ],
    }),
  });

  isSuccessful = false;
  isSignedUpFailed = false;
  errorMessage = '';

  constructor(private registerService: RegisterService) {}
  ngOnInit(): void {}

  onSubmit(): void {
    
  }
}
