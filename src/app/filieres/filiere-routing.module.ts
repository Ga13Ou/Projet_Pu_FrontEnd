import {Routes} from "@angular/router";
import {ListFilieresComponent} from './list-filieres/list-filieres.component';
import {CreateFiliereComponent} from './create-filiere/create-filiere.component';
import {EditFiliereComponent} from './edit-filiere/edit-filiere.component';
import {AuthRoleService as AuthRole} from "../DA/auth-role.service";
export const routes: Routes = [
  {
    path: '',

    children: [{
      path: 'list',
      component: ListFilieresComponent
    },
      {
        path: 'add',
        component: CreateFiliereComponent,
        canActivate: [AuthRole],
        data: {
          expectedRole: 'EMPLOYE'
        }
      },
      {
        path: 'edit/:id',
        component: EditFiliereComponent,
        canActivate: [AuthRole],
        data: {
          expectedRole: 'EMPLOYE'
        }
      }]
  }
];
