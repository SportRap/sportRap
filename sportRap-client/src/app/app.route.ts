import {RouterModule, Routes} from  '@angular/router';

import {TelainicialComponent} from './telainicial/telainicial.component';
import { HomeComponent } from './home/home.component';


const appRoutes : Routes = [

  {path: '', component : TelainicialComponent},
  {path: 'home', component: HomeComponent}

];


export const routing = RouterModule.forRoot(appRoutes);
