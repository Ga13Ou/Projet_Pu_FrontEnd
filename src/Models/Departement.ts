import {Enseignant} from "./Enseignant";
/**
 * Created by GAST-LEE on 28/04/2018.
 */
export class Departement{
    _id:string;
    nom:string;
    chef_departement:Enseignant;
    enseignants:Enseignant[];
   // TODO add liste_matieres:Matiere[];
}