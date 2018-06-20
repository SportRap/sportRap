import { DashboardEventoComponent } from './dashboard-evento/dashboard-evento.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    DashboardEventoComponent
  ]
})
export class DashboardModule { }
