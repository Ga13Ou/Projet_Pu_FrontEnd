import {User} from "./User";
/**
 * Created by GAST-LEE on 15/04/2018.
 */
export class Employe extends User{
    empl_poste:String;
    constructor(){
        super.type="EMPLOYE";
    }
}