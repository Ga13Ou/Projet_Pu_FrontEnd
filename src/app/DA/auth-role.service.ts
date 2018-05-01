
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {BackEndServiceService} from "./back-end-service.service";

@Injectable()
export class AuthRoleService implements CanActivate{

  constructor(private userService:BackEndServiceService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot):boolean{
    const expectedRole=route.data.expectedRole;
    const currentRole=JSON.parse(localStorage.getItem("currentUser")).type;
    if(!this.userService.isLoggedIn()){
      this.router.navigate(['/login']);
      return false;
    }
    else if(expectedRole!=currentRole){
      this.router.navigate(['/']);
      return false;
    }
    else return true;
  }

}
