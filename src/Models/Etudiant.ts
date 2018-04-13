/**
 * Created by GAST-LEE on 12/04/2018.
 */
export class Etudiant{
    nom:string;
    prenom:string;
    email:string;
    mot_de_passe:string;
    num_tel:string;
    date_naissance:string;
    num_cin:string;
    adresse:string;
   readonly type="ETUDIANT";
   etu_num_inscription:string;
   etu_annee_admission:string;
   constructor(){}
}