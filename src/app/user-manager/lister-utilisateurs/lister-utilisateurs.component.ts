import {Component, OnInit} from '@angular/core';
import {BackEndServiceService} from "../../DA/back-end-service.service";
import {AccountTypeEnum} from "../../../Models/AccountTypeEnum";

@Component({
    selector: 'app-lister-utilisateurs',
    templateUrl: './lister-utilisateurs.component.html',
    styleUrls: ['./lister-utilisateurs.component.scss']
})
export class ListerUtilisateursComponent implements OnInit {

    constructor(private userService: BackEndServiceService) {
    }

    private isDataAvailable = false;    //to solve the async call of data, page is loaded before getting data
                                        //TODO change it after learning about async and await....
    private users;
    displayedColumns = ['nom', 'prenom', 'email', 'type'];

    ngOnInit() {
        this.users = this.userService.getAll().then((result: any) => {
            this.users = result.data.users;
            this.isDataAvailable = true;
            console.log(this.users);
        }).catch(err => {
            console.error(err);
        });

    } 

}

export interface Element {
    nom: string;
    prenom: string;
    email: string;
    type: string;
}