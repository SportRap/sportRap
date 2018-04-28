import { DashboardComponent } from './_components/dashboard/dashboard.component';
import {RouterModule, Routes} from  '@angular/router';

import {TelainicialComponent} from './_components/telainicial/telainicial.component';

const appRoutes : Routes = [

  {path: '', component : TelainicialComponent},
  {path: 'dashboard', component: DashboardComponent}
];


export const routing = RouterModule.forRoot(appRoutes);
