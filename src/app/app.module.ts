import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from "./_services/auth.service";
import { HttpModule } from '@angular/http';
import { TokenStorage } from './_services/token.storage'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { HomeComponent } from './home/home.component';
import { EventoComponent } from './evento/evento.component';

import {routing} from './app.route';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
    TelainicialComponent,
    HomeComponent,
    EventoComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [AuthService,TokenStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
