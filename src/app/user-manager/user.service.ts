import { Injectable } from '@angular/core';
import {Etudiant} from "../../Models/Etudiant";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  addStudent(user:Etudiant){
    console.log(JSON.stringify({user}));

    const uri = 'http://139.99.97.231:3000/utilisateur/subscribe';
    const obj =JSON.stringify({user});
    this.http.post(uri,obj).subscribe(res=>console.log("done"+res));

  }
}
