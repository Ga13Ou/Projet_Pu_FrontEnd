import {Routes} from "@angular/router";
import {ListFilieresComponent} from "../filieres/list-filieres/list-filieres.component";
import {ListMatiereComponent} from "./list-matiere/list-matiere.component";


export const routes: Routes = [
  {
    path: '',

    children: [{
      path: 'list',
      component: ListMatiereComponent
    }]
  }
];
