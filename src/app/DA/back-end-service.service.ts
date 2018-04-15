import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../Models/User';
import {environment} from "../../environments/environment";

@Injectable()
export class BackEndServiceService {

  constructor(private http :HttpClient) { }
  getAll() {
    return this.http.get<User[]>('http://139.99.97.231:3000/utilisateur/all?page=0&limit=0');
  }

  login(user : User):Promise<> {
    return new Promise((resolve,reject)=>{
      this.http.post(environment.SERVER_URL+'/utilisateur'+'/login',user).toPromise().then(result=>{
        resolve(result);

      }).catch(err=>{
          reject(err)
      });
    })
  console.log(JSON.stringify({user}));
//TODO: finish the login and storing the object from result.data.user in a User object 
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
