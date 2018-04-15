import {Routes} from "@angular/router";
import {CreateComponent} from "./create/create.component";
import {EtudiantRegisterComponent} from "./etudiant-register/etudiant-register.component";
export const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'create',
      component: CreateComponent
    },
      {
      path: 'studentRegister',
      component: EtudiantRegisterComponent
    }]
  }
];
