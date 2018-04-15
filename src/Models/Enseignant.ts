import {User} from "./User";
/**
 * Created by GAST-LEE on 15/04/2018.
 */
export class Enseignant extends User{

    ens_grade:String;
    ens_type_contrat:{type:String,enum:['CONTRACTUEL','VACATAIRE','EXPERT','AUTRE']};
    constructor(){
        super();
        this.type="ENSEIGNANT";
    }
}