import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BackEndServiceService} from "../../DA/back-end-service.service";
import {Router} from "@angular/router";
import {CustomValidators} from "ng2-validation";
import {User} from "../../../Models/User";
import swal from 'sweetalert2';

@Component({
    selector: 'app-create-departement',
    templateUrl: './create-departement.component.html',
    styleUrls: ['./create-departement.component.scss']
})
export class CreateDepartementComponent implements OnInit {
    public form: FormGroup;
    public enseignants: User[];

    constructor(private fb: FormBuilder, private backend: BackEndServiceService, private router: Router) {
    }

    ngOnInit() {
        //to get list of enseignant
        this.backend.getAll().then((result: any) => {
            this.enseignants = result.data.users;
            for (var i = 0; i < this.enseignants.length; i++) {
                if (this.enseignants[i].type != "ENSEIGNANT") {
                    this.enseignants.splice(i, 1);
                    i--;
                }
            }
        });
        this.form = this.fb.group({
            nom: [null, Validators.compose([Validators.required])],
            chef_departement: [null, Validators.compose([Validators.required])],
            enseignantsDepartement:new FormControl()
        });
    }

    onSubmit() {
        if (this.form.valid) {
            let body = {
                "departement": {
                    "nom": this.form.controls['nom'].value,
                    "chef_departement": this.form.controls['chef_departement'].value,
                    enseignants:this.form.controls['enseignantsDepartement'].value
                }

            };
            this.backend.addDepartement(body).then(result => {
                swal({
                    type: 'success',
                    title: 'Departement ' + body.departement.nom + ' ajouté avec succès...',
                    showConfirmButton: false,
                    timer: 3000,
                });
                this.router.navigate ( [ '/departements/list' ] );
            });
        }

    }
}
