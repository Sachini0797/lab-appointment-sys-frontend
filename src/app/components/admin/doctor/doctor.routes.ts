import { Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
// import { EntranceComponent } from './main-entrance/entrance.component';

export default [
  {
    path: '',
    component: DoctorComponent,
    children: [
      {
        path: '',
        component: ListDoctorComponent,
      },
      {
        path: ':id',
        component: UpdateDoctorComponent,
        // component: NewsComponent,
      },
      
      
    ],
  },
] as Routes;
