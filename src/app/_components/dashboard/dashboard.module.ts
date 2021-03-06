import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { EventoService } from './../../_services/evento.service';
import { DashboardEventoComponent } from './dashboard-evento/dashboard-evento.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { EventContentComponent } from './event-content/event-content.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    DashboardEventoComponent,
    ProfileComponent,
    DashboardListComponent,
    EventContentComponent
  ],
  providers : [EventoService]
})
export class DashboardModule { }
