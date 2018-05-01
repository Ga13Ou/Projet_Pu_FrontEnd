import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {BackEndServiceService} from "../../DA/back-end-service.service";
import {AccountTypeEnum} from "../../../Models/AccountTypeEnum";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs/Observable";
import {User} from "../../../Models/User";
import {PerfectScrollbarConfigInterface} from "ngx-perfect-scrollbar";
import swal from 'sweetalert2';
import {Filiere} from '../../../Models/Filiere';
import {UniversalUserForm} from '../../../Models/UniversalUserForm';


@Component({
    selector: 'app-lister-utilisateurs',
    templateUrl: './lister-utilisateurs.component.html',
    styleUrls: ['./lister-utilisateurs.component.scss']
})
export class ListerUtilisateursComponent implements OnInit {

    constructor(private userService: BackEndServiceService, public dialog: MatDialog) {
        this.matTableInit();
    }
    @ViewChild(MatSort) sort: MatSort;
    private isDataAvailable = false;    //to solve the async call of data, page is loaded before getting data
                                        //TODO change it after learning about async and await....
    private users: User[];
    private usersDataSource = new MatTableDataSource(this.users);
    displayedColumns = ['nom', 'prenom', 'email', 'type'];
    private userToUpdate;
    private updateSuccessIndicator = false;
    public currentRole;

    ngOnInit() {
        console.log(this.users);
        this.userService.getAll().then((result: any) => {
            this.usersDataSource.data = result.data.users;
            this.isDataAvailable = true;

            console.log(this.users);
        }).catch(err => {
            console.error(err);
        });


        //for updating the matTable in case of  an update (not required for now)
        this.userService.userUpdated.subscribe(result => {
            this.userToUpdate = result;
            for (var i = 0; i < this.usersDataSource.data.length; i++) {
                if (this.usersDataSource.data[i]._id == this.userToUpdate._id) {
                    this.usersDataSource.data[i] = this.userToUpdate;
                    break;
                }
            }
            this.usersDataSource = new MatTableDataSource(this.usersDataSource.data);
        });
        this.usersDataSource.sort = this.sort;
    }

    onButtonDeleteClick(id: string) {
        swal({
            title: 'Vous etes sûr?',
            text: "Cette action est irreversible",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#08a414',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprimer l\'utilisateur!',
            cancelButtonText: 'annuler'
        }).then((result) => {
            if (result.value) {
                this.userService.delete(id).then(result => {
                    for (var i = 0; i < this.usersDataSource.data.length; i++) {
                        if (this.usersDataSource.data[i]._id == id) {
                            this.usersDataSource.data.splice(i, 1);
                            break;
                        }
                    }
                    swal({
                        title: 'Supprimé',
                        text: "l'utilisateur a été supprimé",
                        type: 'success',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                    this.usersDataSource = new MatTableDataSource(this.usersDataSource.data); //workaround for refreshing the table after delete
                });
            }
        });

    }


    onButtonEditClick(id: string) {
        for (var i = 0; i < this.usersDataSource.data.length; i++) {
            if (this.usersDataSource.data[i]._id == id) {
                this.userToUpdate = this.usersDataSource.data[i];
                break;
            }
        }
        let dialogRef = this.dialog.open(DialogUpdateUser, {
            width: '500px',
            maxHeight: '750px',
            data: {user: this.userToUpdate, updateSuccess: this.updateSuccessIndicator}
        });
    }
    matTableInit() {
        this.currentRole = this.userService.getUserRole();
        if (this.currentRole == 'EMPLOYE') {
            this.displayedColumns.push('Delete');
            this.displayedColumns.push('Edit');
        }
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.usersDataSource.filter = filterValue;
    }
}

/*
 export interface Element {
 _id: string;
 nom: string;
 prenom: string;
 email: string;
 type: string;
 }*/

@Component({
    selector: 'dialog-update-user',
    templateUrl: 'dialog-update-user.html',
})
export class DialogUpdateUser implements OnInit {
    public oldUser: UniversalUserForm;
    public config: PerfectScrollbarConfigInterface = {};
    public listFiliere: Filiere[] = [];
    public filiereId: string = "";

    constructor(public dialogRef: MatDialogRef<DialogUpdateUser>,
                @Inject(MAT_DIALOG_DATA) public data: any, private userService: BackEndServiceService) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.oldUser = Object.assign({}, this.data.user);
        delete this.oldUser.mot_de_passe;
        if (this.data.user.etu_filiere != null)
            this.oldUser.etu_filiere = this.data.user.etu_filiere._id;
        this.userService.getAllFilieres(0, 0).then(data => {
            this.listFiliere = data;
            console.log("jerrrrr", data);
        });
    }

    onSubmit() {
        this.userService.update(this.oldUser).then(result => {


            this.userService.userUpdated.emit(this.oldUser);
            this.dialogRef.close();
            swal({
                type: 'success',
                title: 'Utilisateur modifié avec succès...',
                showConfirmButton: false,
                timer: 3000,
            });
        }).catch(err => {
            this.data.user = this.oldUser;
            swal({
                type: 'error',
                title: 'Une erreur s\'est produite.',
            });
        });
    }
}
