import {Component, OnInit} from '@angular/core';
import {Matiere} from "../../../Models/Matiere";
import {BackEndServiceService} from "../../DA/back-end-service.service";
import {ActivatedRoute} from "@angular/router";
import {DragulaService} from "ng2-dragula";

@Component({
    selector: 'app-matiere-filiere',
    templateUrl: './matiere-filiere.component.html',
    styleUrls: ['./matiere-filiere.component.scss']
})
export class MatiereFiliereComponent implements OnInit {
    matiereInSem1: Matiere[] = [];
    matiereInSem2: Matiere[] = [];
    matiereOut: Matiere[] = [];

    programmeIdSem1: string;
    programmeIdSem2: string;

    filiereActuelleNom: string;
    filiereActuelleNiveau: string;
    matiereState = {
        semestre1: false,
        semestre2: false
    };

    constructor(private back: BackEndServiceService, private route: ActivatedRoute, private dragula: DragulaService) {
        this.dragula.drop.subscribe(value => {
            let [el, target, source] = value.slice(1);
            let elValue = el.attributes["idmatiere"].value;
            let targetValue = target.attributes["name"].value;
            let sourceValue = source.attributes["name"].value;
            this.onDropAction(elValue, sourceValue, targetValue);

        })
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.filiereActuelleNom = params['nomFiliere'];
            this.filiereActuelleNiveau = params['niveauFiliere'];
            this.back.getProgrammeByFiliere(this.filiereActuelleNom, this.filiereActuelleNiveau, 1).then(result => {
                this.matiereInSem1 = result.matieres;
                this.programmeIdSem1 = result._id;
                this.matiereState.semestre1 = true;
                if (this.matiereState.semestre2) {
                    this.initMatiereOut()
                }
            }).catch(err => {
                let body = {
                    "payload": {
                        "semestre": 1,
                        "filiere": this.filiereActuelleNom,
                        "niveau": this.filiereActuelleNiveau
                    }
                }
                if (err.status == 2) {
                    this.back.createProgram(body).then(result => {
                        this.matiereInSem1 = result.matieres;
                        this.programmeIdSem1 = result._id;

                        this.matiereState.semestre1 = true;
                        if (this.matiereState.semestre2) {
                            this.initMatiereOut()
                        }
                    }).catch(err => {
                        console.error(err.data);
                    });
                }
            });
            this.back.getProgrammeByFiliere(this.filiereActuelleNom, this.filiereActuelleNiveau, 2).then(result => {
                this.matiereInSem2 = result.matieres;
                this.programmeIdSem2 = result._id;

                this.matiereState.semestre2 = true;
                if (this.matiereState.semestre1) {
                    this.initMatiereOut();
                }
            }).catch(err => {
                let body = {
                    "payload": {
                        "semestre": 2,
                        "filiere": this.filiereActuelleNom,
                        "niveau": this.filiereActuelleNiveau
                    }
                }
                if (err.status == 2) {
                    this.back.createProgram(body).then(result => {
                        this.matiereInSem2 = result.matieres;
                        this.programmeIdSem2 = result._id;

                        this.matiereState.semestre2 = true;
                        if (this.matiereState.semestre1) {
                            this.initMatiereOut();
                        }
                    }).catch(err => {
                        console.error(err.data);
                    });
                }
            });
        });

    }

    initMatiereOut() {
        this.back.getAllMatieres(0, 0).then(result => {
                let allMatieres: Matiere[] = result;
                for (let i = 0; i < allMatieres.length; i++) {
                    for (let j = 0; j < this.matiereInSem1.length; j++) {
                        if (allMatieres[i]._id == this.matiereInSem1[j]._id) {
                            allMatieres.splice(i, 1);
                            i--;
                            break; //to not continue iterating
                        }
                    }
                }
                for (let l = 0; l < allMatieres.length; l++) {
                    for (var k = 0; k < this.matiereInSem2.length; k++) {
                        if (allMatieres[l]._id == this.matiereInSem2[k]._id) {
                            allMatieres.splice(l, 1);
                            l--;
                            break;  //to not contiue iterating
                        }
                    }


                }
                this.matiereOut = allMatieres;
                console.log(this.matiereOut);

                //TODO wait for rafaa to implement the backend of program(filiere-matiere)
            }
        )
    }

    onDropAction(element: string, source: string, target: string) {
        if (source != target) {
            if (source == "allMatieres") {
                if (target == "semestre1") {
                    this.back.addMatiereToProgramme(element, this.programmeIdSem1).then(result => {
                        //no need to remove the element from the source model because in case of refresh it will be updated
                    });
                }
                else if (target == "semestre2") {
                    this.back.addMatiereToProgramme(element, this.programmeIdSem2);
                }
            }
            else if (target == "allMatieres") {
                if (source == "semestre1") {
                    this.back.deleteMatiereFromProgram(element, this.programmeIdSem1);
                }
                else if (source == "semestre2") {
                    this.back.deleteMatiereFromProgram(element, this.programmeIdSem2);
                }
            }
            else if (target == "semestre1" && source == "semestre2") {
                this.back.addMatiereToProgramme(element, this.programmeIdSem1)
                    .then(result => {
                        this.back.deleteMatiereFromProgram(element, this.programmeIdSem2);
                    });
            }
            else if (target == "semestre2" && source == "semestre1") {
                this.back.addMatiereToProgramme(element, this.programmeIdSem2)
                    .then(result => {
                        this.back.deleteMatiereFromProgram(element, this.programmeIdSem1);
                    })
            }
        }
    }

    removeMatiereFromArray(array: Matiere[], matiereId: string) {
        for (let i = 0; i < array.length; i++) {
            if (array[i]._id == matiereId) {
                array.splice(i, 1);
                i--;
            }

        }
    }
}
