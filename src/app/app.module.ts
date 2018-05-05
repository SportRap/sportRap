import { DashboardModule } from './_components/dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from "./_services/auth.service";
import { HttpModule } from '@angular/http';
import { TokenStorage } from './_services/token.storage'

import { AppComponent } from './app.component';
import { TelainicialComponent } from './_components/telaInicial/telainicial.component';

import {routing} from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    TelainicialComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    routing,
    DashboardModule

  ],
  providers: [AuthService,TokenStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
