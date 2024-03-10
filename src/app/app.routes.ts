import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LabTestMenuComponent } from './components/admin/lab-test-menu/lab-test-menu.component';
import { PatientComponent } from './components/admin/patient/patient.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin/dashboard', component: DashboardComponent },
    { path: 'admin/lab-test-menu', component: LabTestMenuComponent },
    { path: 'admin/patient', component: PatientComponent },
    { path: 'patient/patient-dashboard', component: PatientDashboardComponent},
];
