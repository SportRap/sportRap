import { DashboardModule } from './_components/dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { TelainicialComponent } from './_components/telaInicial/telainicial.component';

import {routing} from './app.route';
import { UserService } from './_services/user.service';
import { AuthGuard } from './_components/security/auth.guard';
import { SharedService } from './_services/shared.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardListComponent } from './_components/dashboard/dashboard-list/dashboard-list.component';




@NgModule({
  declarations: [
    AppComponent,
    TelainicialComponent,

  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    DashboardModule

  ],
  //providers: [AuthService,TokenStorage],
  providers: [
    UserService, 
    AuthGuard, 
    SharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
