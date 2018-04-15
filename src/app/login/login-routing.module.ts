import {Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';
export const routesLogin: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: LoginComponent
    }]
  }
];
