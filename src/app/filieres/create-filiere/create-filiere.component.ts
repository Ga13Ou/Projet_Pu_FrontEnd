import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {BackEndServiceService} from '../../DA/back-end-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-filiere',
  templateUrl: './create-filiere.component.html',
  styleUrls: ['./create-filiere.component.scss']
})
export class CreateFiliereComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder,private backend:BackEndServiceService,private router:Router) {}
  ngOnInit() {
    this.form = this.fb.group({
      nom: [null, Validators.compose([Validators.required])],
      groupe: [null, Validators.compose([Validators.required, CustomValidators.number])],
      niveau: [null, Validators.compose([Validators.required, CustomValidators.number])]
    });
  }

  onSubmit() {
    if(this.form.valid){
      let body = {
        "filiere":{
          "nom":this.form.controls['nom'].value,
          "niveau":this.form.controls['niveau'].value,
          "groupe":this.form.controls['groupe'].value
        }
      };
      console.log(body);
      this.backend.createFiliere(body).then(data=>{
        console.log(data);
        this.router.navigate ( [ '/filieres/list' ] );
      })

    }
  }

}
