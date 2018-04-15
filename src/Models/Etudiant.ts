/**
 * Created by GAST-LEE on 15/04/2018.
 */
import {User} from "./User";
export class Etudiant extends User{
    etu_num_inscription:string;
    etu_annee_admission:string;
    constructor(){
        super();
        this.type="ETUDIANT";
}
}
