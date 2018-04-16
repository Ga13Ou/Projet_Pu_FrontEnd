import {Routes} from "@angular/router";
import {CreateComponent} from "./create/create.component";
import {AjoutEtudiantComponent} from "./ajout-etudiant/ajout-etudiant.component";
export const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'create',
      component: CreateComponent
    },
      {
      path: 'AjoutEtudiant',
      component: AjoutEtudiantComponent
    }]
  }
];
