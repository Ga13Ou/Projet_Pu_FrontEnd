import {Routes} from "@angular/router";
import {ListFilieresComponent} from "../filieres/list-filieres/list-filieres.component";
import {ListMatiereComponent} from "./list-matiere/list-matiere.component";
import {EditFiliereComponent} from "../filieres/edit-filiere/edit-filiere.component";
import {CreateMatiereComponent} from "./create-matiere/create-matiere.component";
import {EditMatiereComponent} from "./edit-matiere/edit-matiere.component";
import {MatiereFiliereComponent} from "./matiere-filiere/matiere-filiere.component";


export const routes: Routes = [
    {
        path: '',

        children: [{
            path: 'list',
            component: ListMatiereComponent
        },
            {
                path: 'add',
                component: CreateMatiereComponent
            },
            {
                path: 'edit/:id',
                component: EditMatiereComponent
            }, {
                path: 'addFiliere/:nomFiliere/:niveauFiliere',
                component: MatiereFiliereComponent
            }
        ]
    }
];
