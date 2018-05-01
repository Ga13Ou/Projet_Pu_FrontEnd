import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Etudiant} from '../../../Models/Etudiant';
import {User} from '../../../Models/User';
import {BackEndServiceService} from '../../DA/back-end-service.service';
import swal from 'sweetalert2';
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

      //to redirect to the dashboard if already connected
      let currentUser=JSON.parse(localStorage.getItem("currentUser"));
      if(currentUser){
        this.router.navigate(['/']);
    }
  }

  onSubmit() {
  /*  if (this.form.controls['uname'].value.trim() && this.form.controls['password'].value.trim()) {
      this.router.navigate ( [ '/' ] );
      console.log("uname",this.form.controls['uname'].value) ;
    }
*/

   this.loginService.login(this.model).then(result=>{
       let currentUser =localStorage.getItem("currentUser");
       if(currentUser){
           this.router.navigate(['/']);
       }
}).catch(err=>{
       swal({
           type: 'error',
           title: err.error.message,
       });
   });

  }

}


