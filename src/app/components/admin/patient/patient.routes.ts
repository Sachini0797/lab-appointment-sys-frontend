import { Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { UpdateComponent } from './update/update.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
// import { EntranceComponent } from './main-entrance/entrance.component';

export default [
  {
    path: '',
    component: PatientComponent,
    children: [
      {
        path: '',
        component: ListPatientComponent,
      },
      {
        path: ':id',
        component: UpdateComponent,
        // component: NewsComponent,
      },
      
      
    ],
  },
] as Routes;
