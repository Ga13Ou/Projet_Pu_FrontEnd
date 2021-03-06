import {AccountTypeEnum} from "./AccountTypeEnum";
/**
 * Created by GAST-LEE on 12/04/2018.
 */

export class User {
  creation_date: string;
  _id:string;
  nom: string;
  prenom: string;
  email: string;
  mot_de_passe: string;
  num_tel: number;
  date_naissance: string;
  num_cin: string;
  adresse: string;
  img_url:string;
  public type: AccountTypeEnum;
}


