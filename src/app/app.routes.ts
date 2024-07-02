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
import { DoctorComponent } from './components/admin/doctor/doctor.component';
import { TechnicianComponent } from './components/admin/technician/technician.component';
import { AppointmentComponent } from './components/admin/appointment/appointment.component';
import { UpdateDoctorComponent } from './components/admin/doctor/update-doctor/update-doctor.component';
import { UpdateTechnicianComponent } from './components/admin/technician/update-technician/update-technician.component';
import { UpdateAppointmentComponent } from './components/admin/appointment/update-appointment/update-appointment.component';
import { ReportsListsComponent } from './components/admin/reports-lists/reports-lists.component';
import { AlkalinePhosphateComponent } from './components/admin/print-reports/alkaline-phosphate/alkaline-phosphate.component';
import { MyReportsComponent } from './components/patient/my-reports/my-reports.component';
import { FormAlkalinePhosphateComponent } from './components/admin/print-reports/alkaline-phosphate/form-alkaline-phosphate/form-alkaline-phosphate.component';
import { FormBloodUreaComponent } from './components/admin/print-reports/blood-urea/form-blood-urea/form-blood-urea.component';
import { FormDengueAntibodyIggIgmComponent } from './components/admin/print-reports/dengue-antibody-igg-igm/form-dengue-antibody-igg-igm/form-dengue-antibody-igg-igm.component';
import { BloodUreaComponent } from './components/admin/print-reports/blood-urea/blood-urea.component';
import { AlkalinePhosphataseListComponent } from './components/patient/my-reports/alkaline-phosphatase-list/alkaline-phosphatase-list.component';
import { BloodUreaListComponent } from './components/patient/my-reports/blood-urea-list/blood-urea-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin/dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
    { path: 'admin/lab-test-menu', component: LabTestMenuComponent },
    
    {
      path: 'admin/patient',
       loadChildren: () => import('./components/admin/patient/patient.routes'),
  },
    
    {
      path: 'admin/doctor',
       loadChildren: () => import('./components/admin/doctor/doctor.routes'),
  },
  {
    path: 'admin/technician',
     loadChildren: () => import('./components/admin/technician/technician.routes'),
},
    { path: 'admin/lab-tests', component: LabTestsComponent , canActivate:[AuthGuard]},
    { path: 'admin/lab-tests/new', component: UpdateLabTestsComponent , canActivate:[AuthGuard]},
    { path: 'admin/appointment', component: AppointmentComponent , canActivate:[AuthGuard]},
    { path: 'admin/appointment/new', component: UpdateAppointmentComponent , canActivate:[AuthGuard]},
    { path: 'admin/lab-tests-invoice', component: LabTestInvoiceComponent , canActivate:[AuthGuard]},
    { path: 'admin/lab-tests-invoice/new/:appointmentId', component: UpdateLabTestInvoiceComponent , canActivate:[AuthGuard]},
    { path: 'admin/labtestinvoiceprint/:labTestInvoiceId', component: LabtestinvoiceprintComponent , canActivate:[AuthGuard]},
    { path: 'admin/reportsList/:labTestInvoiceId', component: ReportsListsComponent , canActivate:[AuthGuard]},
    { path: 'admin/print/form-alkaline/:appointmentId', component: FormAlkalinePhosphateComponent , canActivate:[AuthGuard]},
    { path: 'admin/print/form-blood-urea/:appointmentId', component: FormBloodUreaComponent , canActivate:[AuthGuard]},
    { path: 'admin/print/form-dengue-antibody/:appointmentId', component: FormDengueAntibodyIggIgmComponent , canActivate:[AuthGuard]},
    { path: 'admin/print/alkaline/:id', component: AlkalinePhosphateComponent , canActivate:[AuthGuard]},
    { path: 'admin/print/blood-urea/:id', component: BloodUreaComponent , canActivate:[AuthGuard]},
    { path: 'patient/patient-dashboard', component: PatientDashboardComponent, canActivate:[AuthGuard]},
    { path: 'patient/my-reports', component: MyReportsComponent, canActivate:[AuthGuard]},
    { path: 'patient/my-reports/alkaline-list', component: AlkalinePhosphataseListComponent, canActivate:[AuthGuard]},
    { path: 'patient/my-reports/bloodUrea-list', component: BloodUreaListComponent, canActivate:[AuthGuard]},
];


// export const routes: Routes = [
//     //redirect to under development component
//     { path: '', pathMatch: 'full', redirectTo: 'underdev' },
  
//     //initial redirect if the main path is empty
//     // { path: '', pathMatch: 'full', redirectTo: 'home' },
  
//     { path: 'underdev', component: UnderDevelopmentComponent },
  
//     { path: 'home', component: HomeComponent },
  
//     { path: 'aboutus', component: AboutUsComponent },
  
//     { path: 'careers', component: CareersComponent },
  
//     { path: 'contact', component: ContactComponent },
  
//     {
//       path: 'news',
//       loadChildren: () =>
//         import('./pages/news/news.routes').then((m) => m.default),
//     },
  
//     {
//       path: 'rec-reading',
//       loadChildren: () =>
//         import('./pages/rec-reading/rec-reading.routes').then((m) => m.default),
//     },
//     // { path: 'services', component: ServicesComponent },
//     {
//       path: 'services',
//       loadChildren: () =>
//         import('./pages/services/services.routes').then((m) => m.default),
//     },
  
//     { path: 'portfolio', component: PortfolioComponent },
//   ];