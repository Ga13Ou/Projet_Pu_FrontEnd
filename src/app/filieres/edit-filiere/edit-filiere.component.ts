import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {BackEndServiceService} from '../../DA/back-end-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Filiere} from '../../../Models/Filiere';

@Component({
  selector: 'app-edit-filiere',
  templateUrl: './edit-filiere.component.html',
  styleUrls: ['./edit-filiere.component.scss']
})
export class EditFiliereComponent implements OnInit {

  public form: FormGroup;
  public id : String;
  constructor(private fb: FormBuilder,private backend:BackEndServiceService,private router:Router,private route: ActivatedRoute) {}
  ngOnInit() {
    this.form = this.fb.group({
      nom: [null, Validators.compose([Validators.required])],
      groupe: [null, Validators.compose([Validators.required, CustomValidators.number])],
      niveau: [null, Validators.compose([Validators.required, CustomValidators.number])]
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.backend.getFiliereById(this.id).then((data : Filiere)=>{
          this.form.controls['nom'].setValue(data.nom);
          this.form.controls['groupe'].setValue(data.groupe);
          this.form.controls['niveau'].setValue(data.niveau);
      });
    });

  }

  onSubmit() {
    if(this.form.valid){
      let body = {
        "filiere":{
          "_id":this.id,
          "nom":this.form.controls['nom'].value,
          "niveau":this.form.controls['niveau'].value,
          "groupe":this.form.controls['groupe'].value
        }
      };
      this.backend.editFiliere(body).then(data=>{
        this.router.navigate ( [ '/filieres/list' ] );
      })

    }
  }

}
