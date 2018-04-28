import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomValidators} from "ng2-validation";
import {User} from '../../../Models/User';
import {BackEndServiceService} from "../../DA/back-end-service.service";
import {Enseignant} from "../../../Models/Enseignant";
import {UniversalUserForm} from "../../../Models/UniversalUserForm";
import swal from 'sweetalert2';
import {Filiere} from '../../../Models/Filiere';


/*const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));*/
@Component({
  selector: 'app-etudiant-register',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.scss']
})
export class AjoutEtudiantComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private userService:BackEndServiceService) {}
  public model= new UniversalUserForm();
  public listFiliere : Filiere[] = [];


  ngOnInit() {
    /*this.form = this.fb.group( {
      nom:null,
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      password: password,
      confirmPassword: confirmPassword
    } );*/
    this.userService.getAllFilieres(0,0).then(data=>{
        this.listFiliere = data;
    });
  }

  onSubmit() {
    console.log(this.model);
    this.userService.create(this.model).then((result)=>{
        swal({
            type: 'success',
            title: 'Utilisateur ajouté avec succès...',
            showConfirmButton: false,
            timer: 3000,
        });
        this.router.navigate( ['/'] );

    }).catch((err:any)=>{console.error(err);
        if(err.status==2) {
            swal({
                type: 'error',
                title: 'Une erreur s\'est produite.',
                text: err.error.message,
            });
        }});


  }
  onChangeInit(){
    delete this.model.empl_poste;
    delete this.model.ens_grade;
    delete this.model.ens_type_contrat;
    delete this.model.etu_num_inscription;
    delete this.model.etu_annee_admission;
  }
}
