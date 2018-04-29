import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BackEndServiceService} from "../../DA/back-end-service.service";
import {Matiere} from "../../../Models/Matiere";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomValidators} from "ng2-validation";

@Component({
  selector: 'app-edit-matiere',
  templateUrl: './edit-matiere.component.html',
  styleUrls: ['./edit-matiere.component.scss']
})
export class EditMatiereComponent implements OnInit {

  public form: FormGroup;
  public id : String;
  constructor(private fb: FormBuilder,private backend:BackEndServiceService,private router:Router,private route: ActivatedRoute) {}
  ngOnInit() {
    this.form = this.fb.group({
      libelle: [null, Validators.compose([Validators.required])]
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.backend.getMatiereById(this.id).then((data : Matiere)=>{
        this.form.controls['libelle'].setValue(data.libelle);

      });
    });

  }

  onSubmit() {
    if(this.form.valid){
      let body = {
        "matiere":{
          "_id":this.id,
          "libelle":this.form.controls['libelle'].value,

        }
      };
      this.backend.editMatiere(body).then(data=>{
        this.router.navigate ( [ '/matieres/list' ] );
      })

    }
  }

}
