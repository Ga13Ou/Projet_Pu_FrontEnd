import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../Models/User';

@Injectable()
export class BackEndServiceService {

  constructor(private http :HttpClient) { }
  getAll() {
    return this.http.get<User[]>('http://139.99.97.231:3000/utilisateur/all?page=0&limit=0');
  }

  login() {
    let body = {
      "email":"rafaaseddik@yahoo.fr",
      "password":"test"
    };
    return this.http.get<User[]>('http://139.99.97.231:3000/utilisateur/all?page=0&limit=0');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user: User) {
    return this.http.post('/api/users', user);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user._id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }

}
