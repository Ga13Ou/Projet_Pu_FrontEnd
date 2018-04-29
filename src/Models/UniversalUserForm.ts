import {User} from "./User";
import {TypeContratEnum} from "./TypeContratEnum";
import {Filiere} from './Filiere';
export class UniversalUserForm extends User{
    empl_poste:string;
    etu_num_inscription:string;
    etu_annee_admission:string;
    etu_filiere : string;
    ens_grade:string;
    ens_type_contrat:TypeContratEnum;
}
