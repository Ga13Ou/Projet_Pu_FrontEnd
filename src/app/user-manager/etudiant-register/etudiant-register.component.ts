import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomValidators} from "ng2-validation";
import {Etudiant} from "../../../Models/Etudiant";
import {UserService} from "../user.service";

/*const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));*/
@Component({
  selector: 'app-etudiant-register',
  templateUrl: './etudiant-register.component.html',
  styleUrls: ['./etudiant-register.component.scss']
})
export class EtudiantRegisterComponent implements OnInit {

  /*public form: FormGroup;*/
  constructor(private fb: FormBuilder, private router: Router, private  userService:UserService) {}
  private model =new Etudiant();

  ngOnInit() {
    /*this.form = this.fb.group( {
      nom:null,
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      password: password,
      confirmPassword: confirmPassword
    } );*/
  }

  onSubmit() {
    /*this.router.navigate( ['/dashboard'] );*/
    this.userService.addStudent(this.model);
  }
}
