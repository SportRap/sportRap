import { DashboardEventoComponent } from './dashboard-evento/dashboard-evento.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardEventoComponent
  ]
})
export class DashboardModule { }
