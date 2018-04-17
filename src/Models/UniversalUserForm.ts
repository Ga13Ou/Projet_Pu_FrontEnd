import {User} from "./User";
import {TypeContratEnum} from "./TypeContratEnum";
export class UniversalUserForm extends User{
    empl_poste:string;
    etu_num_inscription:string;
    etu_annee_admission:string;
    ens_grade:string;
    ens_type_contrat:TypeContratEnum;
}