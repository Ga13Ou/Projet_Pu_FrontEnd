import {Routes} from "@angular/router";
import {CreateComponent} from "./create/create.component";
import {AjoutEtudiantComponent} from "./ajout-etudiant/ajout-etudiant.component";
import {ListerUtilisateursComponent} from "./lister-utilisateurs/lister-utilisateurs.component";
import {AuthRoleService as AuthRole} from "../DA/auth-role.service";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'AjoutEtudiant',
                component: AjoutEtudiantComponent,
                canActivate: [AuthRole],
                data: {
                    expectedRole: 'EMPLOYE'
                }
            }, {
                path: 'show',
                component: ProfilePageComponent,

            }, {
                path: '',
                component: ProfilePageComponent,

            },
            {
                path: 'ListerUtilisateurs',
                component: ListerUtilisateursComponent
            }]
    }
];
