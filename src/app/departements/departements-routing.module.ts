import {Routes, RouterModule} from '@angular/router';
import {CreateDepartementComponent} from "./create-departement/create-departement.component";
import {ListDepartementsComponent} from "./list-departements/list-departements.component";
import {EditDepartementsComponent} from "./edit-departements/edit-departements.component";
import {AuthRoleService as AuthRole} from "../DA/auth-role.service";
export const routes: Routes = [{
    path: '',

    children: [
        {
            path: 'add',
            component: CreateDepartementComponent,
            canActivate: [AuthRole],
            data: {
                expectedRole: 'EMPLOYE'
            }
        }, {
            path: 'list',
            component: ListDepartementsComponent

        }, {
            path: 'edit/:id',
            component: EditDepartementsComponent,
            canActivate: [AuthRole],
            data: {
                expectedRole: 'EMPLOYE'
            }

        }]
}];


