import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../Models/User";
import {BackEndServiceService} from "../../DA/back-end-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Departement} from "../../../Models/Departement";
import swal from "sweetalert2";
import {forEach} from "@angular/router/src/utils/collection";
@Component({
    selector: 'app-edit-departements',
    templateUrl: './edit-departements.component.html',
    styleUrls: ['./edit-departements.component.scss']
})
export class EditDepartementsComponent implements OnInit {
    public form: FormGroup;
    public enseignants: User[];
    public id: String;

    constructor(private fb: FormBuilder, private backend: BackEndServiceService, private router: Router, private route: ActivatedRoute) {
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
            enseignantsDepartement: new FormControl()
        });

        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.backend.getDepartementById(this.id).then((data: Departement) => {
                var enseignantsIDs: string[]=[];
                data.enseignants.forEach(a => {
                    enseignantsIDs.push(a._id);
                    this.form.controls['enseignantsDepartement'].setValue(enseignantsIDs);
                });

                this.form.controls['nom'].setValue(data.nom);
                if(data.chef_departement)
                    this.form.controls['chef_departement'].setValue(data.chef_departement._id);

            });
        });
    }

    onSubmit() {
        if (this.form.valid) {
            let body = {
                "departement": {
                    "_id": this.id,
                    "nom": this.form.controls['nom'].value,
                    "chef_departement": this.form.controls['chef_departement'].value,
                    "enseignants":this.form.controls['enseignantsDepartement'].value,

                }

            };
            console.log(body);
            this.backend.editDepartement(body).then(result => {
                swal({
                    type: 'success',
                    title: 'Departement ' + body.departement.nom + ' mis a jour avec succès...',
                    showConfirmButton: false,
                    timer: 3000,
                });
                this.router.navigate(['/departements/list']);
            });
        }

    }
}
