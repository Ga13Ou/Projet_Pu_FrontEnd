import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../Models/User';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable()
export class BackEndServiceService {
  result:any;
  constructor(private http :HttpClient, private router: Router) { }
  getAll() {
    return this.http.get<User[]>('http://139.99.97.231:3000/utilisateur/all?page=0&limit=0');
  }

  login(user : User) {
    console.log(JSON.stringify({user}));
    return new Promise((resolve,reject)=>{
      this.http.post(environment.SERVER_URL+'/utilisateur'+'/login',user)
          .toPromise()
          .then((result:any)=>{
            console.log(result);
            if(result.status===1) {
              localStorage.setItem("currentUser", JSON.stringify(result.data.user));
            resolve(result);
            }
          }).catch(err=>{
          reject(err);

      });
    });
  }

  logout(){
    localStorage.removeItem("currentUser");
    this.router.navigate(['/login']);
  }

  isLoggedIn():boolean{
    let currentUser=JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser)
      return true;
    return false;
  }
  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user: User) {
    return this.http.post('/api/users', user);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }

}
