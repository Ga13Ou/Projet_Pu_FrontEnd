import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {BackEndServiceService} from "./back-end-service.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router:Router,private userService:BackEndServiceService) { }


  canActivate(): boolean {
    if(!this.userService.isLoggedIn()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
