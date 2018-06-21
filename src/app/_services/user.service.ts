import { CurrentUser } from './../model/currentUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SPORTRAP_API } from './sportrap.api';
import { User2 } from '../model/user2';
import { User } from '../model/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { SharedService } from './shared.service';


@Injectable()
export class UserService {
  public shared: SharedService;
  
  constructor(private http: HttpClient){
    this.shared = SharedService.getInstance();
  }

  login2(user: User){
    return this.http.post(`${SPORTRAP_API}/api/auth`,user);
    
  }

  login(user: User){
    return this.http.post<any>(`${SPORTRAP_API}/api/auth`,user)
    .map((currentUser: CurrentUser) => {
            // login successful if there's a jwt token in the response
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            
        this.shared.setLocalstorage(currentUser);
        return currentUser;
    });
  }

  create(user: User) {
    return this.http.post(`${SPORTRAP_API}/usuario/novo`, user);
  }

  findByEmail(user: User) {
    return this.http.get(`${SPORTRAP_API}/usuario/${user.email}`, );
  }
  update(user: User2) {
    console.log(user)
    return this.http.post(`${SPORTRAP_API}/usuario/salvar`, user);
  }

}
