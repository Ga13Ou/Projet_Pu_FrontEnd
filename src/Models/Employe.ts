import {User} from "./User";
import {AccountTypeEnum} from "./AccountTypeEnum";
/**
 * Created by GAST-LEE on 15/04/2018.
 */
export class Employe extends User{
    empl_poste:string;
    constructor(){
        super();
        this.type=AccountTypeEnum.Employe;

    }
}
