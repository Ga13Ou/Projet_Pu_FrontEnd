import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Etudiant} from '../../../Models/Etudiant';
import {User} from '../../../Models/User';
import {BackEndServiceService} from '../../DA/back-end-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private loginService:BackEndServiceService) {}
  private model = new User();

  ngOnInit() {
   /* this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } ); */
  }

  onSubmit() {
  /*  if (this.form.controls['uname'].value.trim() && this.form.controls['password'].value.trim()) {
      this.router.navigate ( [ '/' ] );
      console.log("uname",this.form.controls['uname'].value) ;
    }
*/
  this.loginService.login(this.model);

  }
}
