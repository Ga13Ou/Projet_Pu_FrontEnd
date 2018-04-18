import {Component, OnInit} from '@angular/core';
import {BackEndServiceService} from "../../DA/back-end-service.service";
import {AccountTypeEnum} from "../../../Models/AccountTypeEnum";
import {MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs/Observable";

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
    private users:Element[];
    private usersDataSource=new MatTableDataSource(this.users);
    displayedColumns = ['nom', 'prenom', 'email', 'type','Delete','Edit'];

    ngOnInit() {
        console.log(this.users);
       this.userService.getAll().then((result: any) => {
            this.usersDataSource.data = result.data.users;
            this.isDataAvailable = true;

            console.log(this.users);
        }).catch(err => {
            console.error(err);
        });

    }
onButtonDeleteClick(id:string){
        this.userService.delete(id).then(result=>{
            for(var i=0;i<this.usersDataSource.data.length;i++){
                if(this.usersDataSource.data[i]._id==id){
                    this.usersDataSource.data.splice(i,1);
                    break;
                }
            }
            this.usersDataSource=new MatTableDataSource(this.usersDataSource.data); //workaround for refreshing the table after delete
        });
}
    onButtonEditClick(id:string){

    }
}

export interface Element {
    _id:string;
    nom: string;
    prenom: string;
    email: string;
    type: string;
}