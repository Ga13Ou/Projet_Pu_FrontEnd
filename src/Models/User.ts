/**
 * Created by GAST-LEE on 12/04/2018.
 */

export class UserDTO {
  creation_date: string;
  nom: string;
  prenom: string;
  email: string;
  mot_de_passe: string;
  num_tel: number;
  date_naissance: string;
  num_cin: string;
  adresse: string;
  type: string;
  etu_num_inscription?: number;
  etu_annee_admission?: number;
}

export class User extends UserDTO {
  _id: string;
  __v: number;
}
