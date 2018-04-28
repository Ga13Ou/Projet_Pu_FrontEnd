import {Routes, RouterModule} from '@angular/router';
import {CreateDepartementComponent} from "./create-departement/create-departement.component";
import {ListDepartementsComponent} from "./list-departements/list-departements.component";
import {EditDepartementsComponent} from "./edit-departements/edit-departements.component";

export const routes: Routes = [{
    path: '',

    children: [
        {
            path: 'add',
            component: CreateDepartementComponent
        }, {
            path: 'list',
            component: ListDepartementsComponent

        }, {
            path: 'edit/:id',
            component: EditDepartementsComponent

        }]
}];


