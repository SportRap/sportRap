import { DashboardComponent } from './_components/dashboard/dashboard.component';
import {RouterModule, Routes} from  '@angular/router';

import {TelainicialComponent} from './_components/telaInicial/telainicial.component';
import { AuthGuard } from './_components/security/auth.guard';

const appRoutes : Routes = [

  {path: '', component : TelainicialComponent},
  {path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard]}
];


export const routing = RouterModule.forRoot(appRoutes);
