import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BackEndServiceService} from "../../DA/back-end-service.service";
import {Router} from "@angular/router";
import {CustomValidators} from "ng2-validation";

@Component({
  selector: 'app-create-matiere',
  templateUrl: './create-matiere.component.html',
  styleUrls: ['./create-matiere.component.scss']
})
export class CreateMatiereComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder,private backend:BackEndServiceService,private router:Router) {}
  ngOnInit() {
    this.form = this.fb.group({
      libelle: [null, Validators.compose([Validators.required])]

    });
  }

  onSubmit() {
    if(this.form.valid){
      let body = {
        "matiere":{
          "libelle":this.form.controls['libelle'].value,

        }
      };
      console.log(body);
      this.backend.createMatiere(body).then(data=>{
        console.log(data);
        this.router.navigate ( [ '/matieres/list' ] );
      })

    }
  }

}
