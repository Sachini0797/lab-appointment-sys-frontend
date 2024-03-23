import { Routes } from '@angular/router';import { TechnicianComponent } from './technician.component';
import { ListTechnicianComponent } from './list-technician/list-technician.component';
import { UpdateTechnicianComponent } from './update-technician/update-technician.component';


export default [
  {
    path: '',
    component: TechnicianComponent,
    children: [
      {
        path: '',
        component: ListTechnicianComponent,
      },
      {
        path: ':id',
        component: UpdateTechnicianComponent,
        // component: NewsComponent,
      },
      
      
    ],
  },
] as Routes;
