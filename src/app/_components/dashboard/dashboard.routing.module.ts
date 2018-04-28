import { DashboardEventoComponent } from './dashboard-evento/dashboard-evento.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const homeRoutes: Routes = [

  { path: 'dashboard', component: DashboardComponent, children : [
    { 
        path : 'novoEvento', component : DashboardEventoComponent 
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
