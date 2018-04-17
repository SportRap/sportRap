import {RouterModule, Routes} from  '@angular/router';

import {TelainicialComponent} from './telainicial/telainicial.component';
import { HomeComponent } from './home/home.component';
import { EventoComponent } from './evento/evento.component';

const appRoutes : Routes = [

  {path: '', component : TelainicialComponent},
  {path: 'home', component: HomeComponent},
  {path: 'novoEvento', component: EventoComponent}
];


export const routing = RouterModule.forRoot(appRoutes);
