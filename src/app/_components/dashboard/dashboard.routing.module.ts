import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardEventoComponent } from './dashboard-evento/dashboard-evento.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';


const homeRoutes: Routes = [

  { path: 'dashboard', component: DashboardComponent, children : [
    { 
      path : '', component : DashboardListComponent ,canActivate: [AuthGuard]
    },
    { 
        path : 'novoEvento', component : DashboardEventoComponent ,canActivate: [AuthGuard]
    }
  ] ,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
