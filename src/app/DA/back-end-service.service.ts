import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../Models/User';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {UniversalUserForm} from "../../Models/UniversalUserForm";
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Filiere} from '../../Models/Filiere';


@Injectable()
export class BackEndServiceService {
    result: any;
    public userUpdated: EventEmitter<User> = new EventEmitter();

    constructor(private http: HttpClient, private router: Router) {
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.http.get<any>(environment.SERVER_URL + '/utilisateur/all?page=0&limit=0').toPromise()
                .then((result: any) => {
                    if (result.status == 1) {
                        resolve(result);
                    }
                    else
                        reject()
                }).catch(err => {
                console.error(err)
            });
        });
    }


    login(user: User) {
        console.log(JSON.stringify({user}));
        return new Promise((resolve, reject) => {
            this.http.post(environment.SERVER_URL + '/utilisateur' + '/login', user)
                .toPromise()
                .then((result: any) => {
                    console.log(result);
                    if (result.status === 1) {
                        localStorage.setItem("currentUser", JSON.stringify(result.data.user));
                        resolve(result);
                    }
                }).catch(err => {
                reject(err);

            });
        });
    }

    logout() {
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser)
            return true;
        return false;
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: UniversalUserForm) {
        console.log(JSON.stringify({user}));
        let body = JSON.parse(JSON.stringify({user}));
        return new Promise((resolve, reject) => {
            this.http.post(environment.SERVER_URL + "/utilisateur/subscribe", body).toPromise()
                .then((result: any) => {
                    console.log(result.status);
                    if (result.status == 1) {
                        resolve(result);
                    }
                    else {
                        console.log(result.error.message);
                        reject(result);
                    }
                }).catch(err => {
                console.error(err);
            })

        })
    }

    update(user: User) {
        console.log(JSON.stringify({user}));
        let body = JSON.parse(JSON.stringify({user}));
        return this.http.post(environment.SERVER_URL + "/utilisateur/update", body).toPromise();
    }

    delete(id: string) {
        return this.http.get(environment.SERVER_URL + "/utilisateur/delete?id=" + id).toPromise();
    }

    getAllFilieres(page : number , limit : number){
      return new Promise<Filiere[]>((resolve, reject) => {
        this.http.get<any>(environment.SERVER_URL + '/programme/filiere/getAllFilieres?page='+page+'&limit='+limit).toPromise()
          .then((result: any) => {
            if (result.status == 1) {
              resolve(result.data.filieres);
            }
            else
              reject()
          }).catch(err => {
          console.error(err)
        });
      });
    }

  createFiliere(filiere) {
    let body = JSON.parse(JSON.stringify(filiere));
    return new Promise((resolve, reject) => {
      this.http.post(environment.SERVER_URL + "/programme/filiere/create", body).toPromise()
        .then((result: any) => {
          console.log(result.status);
          if (result.status == 1) {
            resolve(result);
          }
          else {
            console.log(result.error.message);
            reject(result);
          }
        }).catch(err => {
        console.error(err);
      })

    })
  }
  editFiliere(filiere) {
    let body = JSON.parse(JSON.stringify(filiere));
    console.log(environment.SERVER_URL + "/programme/filiere/update");
    console.log(body);
    return new Promise((resolve, reject) => {
      this.http.post(environment.SERVER_URL + "/programme/filiere/update", body).toPromise()
        .then((result: any) => {
          console.log(result.status);
          if (result.status == 1) {
            resolve(result);
          }
          else {
            console.log(result.error.message);
            reject(result);
          }
        }).catch(err => {
        console.error(err);
      })

    })
  }

  getFiliereById(id : String){
    return new Promise<Filiere>((resolve, reject) => {
      this.http.get<any>(environment.SERVER_URL + '/programme/filiere/getFiliereByID?id='+id).toPromise()
        .then((result: any) => {
          if (result.status == 1) {
            resolve(result.data.filiere);
          }
          else
            reject()
        }).catch(err => {
        console.error(err)
      });
    });
  }

  deleteFiliere(id: string) {
    return this.http.get(environment.SERVER_URL + "/programme/filiere/delete?id=" + id).toPromise();
  }


}
