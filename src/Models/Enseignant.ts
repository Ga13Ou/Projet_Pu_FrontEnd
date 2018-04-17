import {User} from "./User";
import {AccountTypeEnum} from "./AccountTypeEnum";
import {TypeContratEnum} from "./TypeContratEnum";
/**
 * Created by GAST-LEE on 15/04/2018.
 */
export class Enseignant extends User{

    ens_grade:string;
    ens_type_contrat:TypeContratEnum;
        //{type:String,enum:['CONTRACTUEL','VACATAIRE','EXPERT','AUTRE']};
    //TODO correct this
    constructor(){
        super();
        this.type=AccountTypeEnum.Enseignant;

    }
}
