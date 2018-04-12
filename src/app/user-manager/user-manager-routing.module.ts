import {Routes} from "@angular/router";
import {CreateComponent} from "./create/create.component";
export const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'create',
      component: CreateComponent
    },{
      path: '',
      component: CreateComponent
    }]
  }
];