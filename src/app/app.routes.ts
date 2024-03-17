import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LabTestMenuComponent } from './components/admin/lab-test-menu/lab-test-menu.component';
import { PatientComponent } from './components/admin/patient/patient.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { UpdateComponent } from './components/admin/patient/update/update.component';
import { DeletePatientComponent } from './components/admin/patient/delete-patient/delete-patient.component';
import { LabTestsComponent } from './components/admin/lab-tests/lab-tests.component';
import { UpdateLabTestsComponent } from './components/admin/lab-tests/update-lab-tests/update-lab-tests.component';
import { LabTestInvoiceComponent } from './components/admin/lab-test-invoice/lab-test-invoice.component';
import { UpdateLabTestInvoiceComponent } from './components/admin/lab-test-invoice/update-lab-test-invoice/update-lab-test-invoice.component';
import { LabtestinvoiceprintComponent } from './components/admin/printing/labtestinvoiceprint/labtestinvoiceprint.component';
import { AuthGuard } from './core/auth-guard/auth-gurd';
import { RoleAuthGuard } from './core/auth-guard/role-auth-guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin/dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
    { path: 'admin/lab-test-menu', component: LabTestMenuComponent },
    { path: 'admin/patient', component: PatientComponent },
    { path: 'admin/patient/new', component: UpdateComponent },
    { path: 'admin/lab-tests', component: LabTestsComponent },
    { path: 'admin/lab-tests/new', component: UpdateLabTestsComponent },
    { path: 'admin/lab-tests-invoice', component: LabTestInvoiceComponent },
    { path: 'admin/lab-tests-invoice/new', component: UpdateLabTestInvoiceComponent },
    { path: 'admin/labtestinvoiceprint', component: LabtestinvoiceprintComponent },
    { path: 'patient/patient-dashboard', component: PatientDashboardComponent, canActivate:[AuthGuard]},
];
