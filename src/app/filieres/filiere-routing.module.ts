import {Routes} from "@angular/router";
import {ListFilieresComponent} from './list-filieres/list-filieres.component';
import {CreateFiliereComponent} from './create-filiere/create-filiere.component';
import {EditFiliereComponent} from './edit-filiere/edit-filiere.component';

export const routes: Routes = [
  {
    path: '',

    children: [{
      path: 'list',
      component: ListFilieresComponent
    },
      {
        path: 'add',
        component: CreateFiliereComponent
      },
      {
        path: 'edit/:id',
        component: EditFiliereComponent
      }]
  }
];
